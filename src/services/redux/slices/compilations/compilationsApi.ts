import { ICompilationsTwo } from 'src/types/Compilations.types';
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

export const getCompilations = (): Promise<Array<ICompilationsTwo>> => {
	return fetchData(`${API_BASE_URL}/compilations/redaction`);
};
