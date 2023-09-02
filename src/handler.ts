import { nanoid } from 'nanoid';
import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';
import { BookSchema, IBook } from './vendor/types';
import books from './books';
import { filteredBooks } from './controller/books';

const addBookHandler = (request: Request, h: ResponseToolkit): ResponseObject => {
	const validatePayload = BookSchema.safeParse(request.payload);

	if (!validatePayload.success) {
		const messageErorrs = validatePayload.error.issues.map((issue) => issue.message);
		const response = h.response({
			status: 'fail',
			message: `Gagal menambahkan buku. ${messageErorrs.join(', ')}`,
		});
		response.code(400);
		return response;
	}

	const { name, year, author, summary, publisher, pageCount, readPage, reading } = <IBook>request.payload;

	const id = nanoid(16);
	const insertedAt = new Date().toISOString();
	const updatedAt = insertedAt;

	const newBook: IBook = {
		id,
		name,
		year,
		author,
		summary,
		publisher,
		pageCount,
		readPage,
		reading,
		finished: pageCount === readPage,
		insertedAt,
		updatedAt,
	};

	books.push(newBook);

	const isSuccess = books.some((book) => book.id === id);

	if (isSuccess) {
		const response = h.response({
			status: 'success',
			message: 'Buku berhasil ditambahkan',
			data: {
				bookId: id,
			},
		});
		response.code(201);
		return response;
	}

	const response = h.response({
		status: 'fail',
		message: 'Buku gagal ditambahkan',
	});

	response.code(500);

	return response;
};

const getAllBooksHandler = (request: Request, h: ResponseToolkit): ResponseObject => {
	const dataBooks = filteredBooks(request.query).map((book) => ({
		id: book.id,
		name: book.name,
		publisher: book.publisher,
	}));

	const response = h.response({
		status: 'success',
		data: {
			books: dataBooks,
		},
	});
	return response;
};

const getBookByIdHandler = (request: Request, h: ResponseToolkit): ResponseObject => {
	const { bookId } = request.params;

	const book = books.find((n) => n.id === bookId);

	if (book) {
		const response = h.response({
			status: 'success',
			data: {
				book,
			},
		});
		return response;
	}

	const response = h.response({
		status: 'fail',
		message: 'Buku tidak ditemukan',
	});
	response.code(404);
	return response;
};

const editBookByIdHandler = (request: Request, h: ResponseToolkit): ResponseObject => {
	const { bookId } = request.params;

	const validatePayload = BookSchema.safeParse(request.payload);

	if (!validatePayload.success) {
		const messageErorrs = validatePayload.error.issues.map((issue) => issue.message);
		const response = h.response({
			status: 'fail',
			message: `Gagal memperbarui buku. ${messageErorrs.join(', ')}`,
		});
		response.code(400);
		return response;
	}

	const { name, year, author, summary, publisher, pageCount, readPage, reading } = <IBook>request.payload;
	const updatedAt = new Date().toISOString();

	const index = books.findIndex((book) => book.id === bookId);

	if (index !== -1) {
		books[index] = {
			...books[index],
			name,
			year,
			author,
			summary,
			publisher,
			pageCount,
			readPage,
			reading,
			finished: pageCount === readPage,
			updatedAt,
		};

		const response = h.response({
			status: 'success',
			message: 'Buku berhasil diperbarui',
		});
		return response;
	}

	const response = h.response({
		status: 'fail',
		message: 'Gagal memperbarui buku. Id tidak ditemukan',
	});
	response.code(404);
	return response;
};

const deleteBookByIdHandler = (request: Request, h: ResponseToolkit): ResponseObject => {
	const { bookId } = request.params;

	const index = books.findIndex((book) => book.id === bookId);

	if (index !== -1) {
		books.splice(index, 1);
		const response = h.response({
			status: 'success',
			message: 'Buku berhasil dihapus',
		});
		return response;
	}

	const response = h.response({
		status: 'fail',
		message: 'Buku gagal dihapus. Id tidak ditemukan',
	});
	response.code(404);
	return response;
};

export { addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler };
