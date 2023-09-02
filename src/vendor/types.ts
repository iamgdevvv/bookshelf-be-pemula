import { z } from 'zod';

const BookSchema = z
	.object({
		id: z
			.string({
				invalid_type_error: 'ID buku wajib dalam format string',
			})
			.optional(),
		name: z.string({
			required_error: 'Mohon isi nama buku',
			invalid_type_error: 'Nama buku wajib dalam format string',
		}),
		year: z
			.number({
				required_error: 'Mohon isi tahun buku',
				invalid_type_error: 'Tahun buku wajib dalam format number',
			})
			.min(0, 'Tahun buku tidak bisa kurang dari waktu 0')
			.max(new Date().getFullYear(), 'Tahun buku tidak bisa melebihi waktu saat ini'),
		author: z.string({
			required_error: 'Mohon isi penulis buku',
			invalid_type_error: 'Penulis buku wajib dalam format string',
		}),
		summary: z.string({
			required_error: 'Mohon isi rangkuman buku',
			invalid_type_error: 'Rangkuman buku wajib dalam format string',
		}),
		publisher: z.string({
			required_error: 'Mohon isi penerbit buku',
			invalid_type_error: 'Penerbit buku wajib dalam format string',
		}),
		pageCount: z.number({
			required_error: 'Mohon isi total halaman buku',
			invalid_type_error: 'Total halaman buku wajib dalam format string',
		}),
		readPage: z.number({
			required_error: 'Mohon isi halaman terakhir buku',
			invalid_type_error: 'Halaman terakhir buku wajib dalam format string',
		}),
		reading: z.boolean({
			required_error: 'Mohon isi true/false untuk sedang baca buku',
			invalid_type_error: 'Sedang baca buku wajib dalam format boolean',
		}),
		finished: z.boolean().optional(),
		insertedAt: z.string().optional(),
		updatedAt: z.string().optional(),
	})
	.refine((data) => data.readPage <= data.pageCount, {
		// Refine valid when readpage lower or equal than pagecount
		message: 'readPage tidak boleh lebih besar dari pageCount',
		path: ['readPage'], // path of error
	});

// extract the inferred type
type IBook = z.infer<typeof BookSchema>;

export { BookSchema, IBook };
