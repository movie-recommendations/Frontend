import { IMovieCard } from 'src/types/MovieCard.types';
import { API_BASE_URL } from 'src/utils/constants';


const checkRes = (res: Response) => {
	if (res.ok) {
		return res.json();
	} else {
		return Promise.reject(res);
	}
};

const fetchData = (url: string) => {
	return fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => checkRes(res));
};

export const getMovies = (): Promise<Array<IMovieCard>> => {
	return fetchData(`${API_BASE_URL}/movies`);
};
