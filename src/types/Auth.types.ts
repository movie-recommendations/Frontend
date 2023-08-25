export interface IRecoverPasswordFields {
	email: string;
}

export interface ISignInFields extends IRecoverPasswordFields {
	password: string;
}

export interface ISignUpFields extends ISignInFields {
	repeatPassword: string;
}

export interface IResetPasswordFields {
	password: string;
	repeatPassword: string;
}

export interface IEditProfileFields {
	// email: string;
	// password: string;
	nickname: string;
	dateOfBirth: string;
	sex: 0 | 1;
}

export interface ISignInData {
	email: string;
	password: string;
}

export interface ISignUpData extends ISignInData {
	fav_genres: number[];
}

export interface IUser {
	email: string;
	fav_genres: (number | string)[];
	token: string;
	nickname?: string;
	dateOfBirth?: string;
	sex?: 0 | 1;
}

export interface IResetPasswordData {
	token: string;
	new_password: string;
}
