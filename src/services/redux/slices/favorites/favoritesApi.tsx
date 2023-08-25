import { API_BASE_URL } from 'src/utils/constants';

const checkRes = (res: Response) => {
	if (res.ok) {
		console.log(res.json());
		return res;
	} else {
		return Promise.reject(res);
	}
};

const postData = (url: string) => {
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => checkRes(res));
};

const deleteData = (url: string) => {
	return fetch(url, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => checkRes(res));
};

const fetchData = (url: string) => {
	return fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization:
				'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiYWNrZW5kLWFwaSIsInVzZXJfaWQiOiJmODI0MDVlOC1iYjBkLTQ5YzItOGE4Zi1iMGU1OWUwY2UzYzkiLCJleHAiOjE2OTI0NTIxMjIsInR5cGUiOiJhY2Nlc3MifQ.l6V90AlN42M5fDvBKf5gm3EGtT_0cDiNoBXho8s1dWc',
		},
	}).then((res) => checkRes(res));
};

export const getFavorites = (): Promise<Response> => {
	return fetchData(`${API_BASE_URL}/movies/favorite`);
};

export const addToFavorites = (filmId: number): Promise<Response> => {
	return postData(`${API_BASE_URL}/movies/${filmId}/favorite`);
};

export const deleteFromFavorites = (filmId: number): Promise<Response> => {
	return deleteData(`${API_BASE_URL}/movies/${filmId}/favorite`);
};
