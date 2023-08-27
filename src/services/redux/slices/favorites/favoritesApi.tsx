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
	token?: string
) => {
	return fetch(url, {
		method,
		headers: {
			'Content-Type': 'application/json',
			...(!!token && { Authorization: `Token ${token}` }),
		},
	}).then((res) => checkRes(res));
};

export const fetchAddToFavorites = (id: number, token: string): Promise<Response> => {
	return fetchData(`${API_BASE_URL}/movies/${id}/favorite/`, 'POST', token)
};

export const fetchDeleteFromFavorites = (id: number, token: string): Promise<Response> => {
	return fetchData(`${API_BASE_URL}/movies/${id}/favorite/`, 'DELETE', token)
};

export const getFavoriteMovies = (token: string): Promise<Response> => {
	return fetchData(`${API_BASE_URL}/movies/favorites`, 'GET', token)
};

export const fetchAddToWatch = (id: number, token: string): Promise<Response> => {
	return fetchData(`${API_BASE_URL}/movies/${id}/setwatch/`, 'POST', token)
};

export const fetchDeleteFromWatch = (id: number, token: string): Promise<Response> => {
	return fetchData(`${API_BASE_URL}/movies/${id}/setwatch/`, 'DELETE', token)
};

export const getWatchList = (token: string): Promise<Response> => {
	return fetchData(`${API_BASE_URL}/movies/watchlist`, 'GET', token)
};
