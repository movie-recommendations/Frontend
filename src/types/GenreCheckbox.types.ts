export interface IGenreCheckbox {
	text: string;
	id: number;
	checked?: boolean;
	readOnly?: boolean;
	color?: 'black' | 'white' | 'yellow';
	onChange?: (id: number, newChecked: boolean) => void;
	defaultChecked?: boolean;
	image?: string;
}
