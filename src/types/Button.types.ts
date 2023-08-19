export interface IButton {
	buttonText: string;
	handleButtonClick?: any;
	type: 'button' | 'submit' | 'reset';
	disabled?: boolean;
}
