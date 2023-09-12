import { IMoviesOfDay } from 'src/types/moviesoftheday.types';
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

export const getMoviesOfDay = (): Promise<Array<IMoviesOfDay>> => {
	return fetchData(`${API_BASE_URL}/v1/movies/movies_of_the_day`);
};
