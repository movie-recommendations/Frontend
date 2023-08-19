import { FC, useState } from 'react';
import './CheckboxMain.css';
import { IGenresIcons } from 'src/types/GenresIcons.types';

type Props = {
	genreapi: IGenresIcons;
	checked: boolean;
	onChange: (value: string) => void;
};

export default function GenresIconsFunc({
	genreapi,
	checked,
	onChange,
}: Props) {
	const handleChange = () => {
		onChange(genreapi.title);
	};

	return (
		<label className="genre-checkbox">
			<input
				className="genre-checkbox__input"
				type="checkbox"
				defaultChecked={checked}
				onChange={handleChange}
			/>
			<div className="genre-checkbox__appearance">
				<img src={genreapi.picture} alt={genreapi.title} />
				{genreapi.title}
			</div>
		</label>
	);
}
