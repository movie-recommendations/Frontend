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
		<label className="genre-checkbox genre-checkbox_type_main">
			<input
				className="genre-checkbox__input genre-checkbox__input_type_main"
				type="checkbox"
				defaultChecked={checked}
				onChange={handleChange}
			/>
			<div className="genre-checkbox__appearance genre-checkbox__appearance_type_main">
				<img
					className="genre-checkbox__img genre-checkbox__img_type_main"
					src={genreapi.picture}
					alt={genreapi.title}
				/>
				<p className="genre-checkbox__appearance-title genre-checkbox__appearance__title_type_main">
					{genreapi.title}
				</p>
			</div>
		</label>
	);
}
