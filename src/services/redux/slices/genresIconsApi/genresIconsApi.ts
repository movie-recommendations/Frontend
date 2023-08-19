import { IGenresIcons } from 'src/types/GenresIcons.types';

const API_URL = 'http://kinotochka.acceleratorpracticum.ru/api';

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

export const getGenresIcons = (): Promise<Array<IGenresIcons>> => {
	return fetchData(`${API_URL}/v1/genres`);
};
