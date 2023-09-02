import books from '../books';
import { IBook } from '../vendor/types';

type FilteredBooks = {
	reading?: '1' | '0';
	finished?: '1' | '0';
	name?: string;
};

const filteredBooks = ({ reading, finished, name }: FilteredBooks): IBook[] => {
	if (!reading && !finished && !name) {
		return books;
	}

	const dafaFilter = books.filter((item) => {
		if (reading) {
			if (reading === '1' && item.reading === false) {
				return false;
			} else if (reading === '0' && item.reading === true) {
				return false;
			}
		}

		if (finished) {
			if (finished === '1' && item.finished === false) {
				return false;
			} else if (finished === '0' && item.finished === true) {
				return false;
			}
		}

		if (name && !item.name.toLowerCase().includes(name.toLowerCase())) {
			return false;
		}

		return true;
	});

	return dafaFilter;
};

export { filteredBooks };
