import { API_BASE_URL } from 'src/utils/constants';
import { ISignInData, ISignUpData } from 'src/types/Auth.types';

const API_AUTH_URL = `${API_BASE_URL}/auth`;

const checkRes = (res: Response) => {
	if (res.ok) {
		return res;
	} else {
		return Promise.reject(res);
	}
};

export const fetchData = (
	url: string,
	data?: ISignInData | ISignUpData | { email: string }
) => {
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		...(!!data && { body: JSON.stringify(data) }),
	}).then((res) => checkRes(res));
};

export const fetchSignIn = (data: ISignInData): Promise<Response> => {
	return fetchData(`${API_AUTH_URL}/login/`, data).then((res) => checkRes(res));
};

export const fetchCheckEmail = (data: string): Promise<Response> => {
	return fetchData(`${API_AUTH_URL}/verify-email/`, { email: data }).then(
		(res) => checkRes(res)
	);
};

export const fetchSignUp = (data: ISignUpData): Promise<Response> => {
	return fetchData(`${API_AUTH_URL}/user-registration/`, data).then((res) =>
		checkRes(res)
	);
};
