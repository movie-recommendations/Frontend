import { API_BASE_URL } from 'src/utils/constants';

const checkRes = (res: Response) => {
	if (res.ok) {
		return res;
	} else {
		return Promise.reject(res);
	}
};

export const fetchData = (
	url: string,
	method: string,
	token: string,
	rate?: object
) => {
	return fetch(url, {
		method,
		headers: {
			'Content-Type': 'application/json',
			...(!!token && { Authorization: `Token ${token}` }),
		},
		...(!!rate && { body: JSON.stringify(rate) }),
	}).then((res) => checkRes(res));
};

export const fetchSetRating = (
	id: number,
	rate: object,
	token: string
): Promise<Response> => {
	return fetchData(`${API_BASE_URL}/movies/${id}/rate/`, 'POST', token, rate);
};

export const fetchUpdateRating = (
	id: number,
	rate: object,
	token: string
): Promise<Response> => {
	return fetchData(`${API_BASE_URL}/movies/${id}/rate/`, 'PUT', token, rate);
};

export const getRatedMovies = (token: string): Promise<Response> => {
	return fetchData(`${API_BASE_URL}/movies/rated`, 'GET', token);
};
