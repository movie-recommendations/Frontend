export enum FormTypes {
	signIn = 'signIn',
	signUp = 'signUp',
	recoverPassword = 'recoverPassword',
	resetPassword = 'resetPassword',
	profile = 'profile',
}

export interface IForm {
	formType: FormTypes;
	step?: number;
	setStep?: React.Dispatch<React.SetStateAction<number>>;
}
