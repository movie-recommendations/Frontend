export interface IGenreCheckbox {
	text: string;
	id: number;
	onChange: (id: number, newChecked: boolean) => void;
}
