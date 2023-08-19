import { FC, useState } from 'react';
import './GenreCheckbox.css';
import { IGenreCheckbox } from 'src/types/GenreCheckbox.types';

const GenreCheckbox: FC<IGenreCheckbox> = ({ id, text, onChange }) => {
	const [checked, setChecked] = useState(false);

	const handleChange = () => {
		const newChecked = !checked;
		setChecked(newChecked);
		onChange(id, newChecked);
	};

	return (
		<label className="genre-checkbox">
			<input
				className="genre-checkbox__input"
				type="checkbox"
				checked={checked}
				onChange={handleChange}
				value={id}
			/>
			<span className="genre-checkbox__appearance">{text}</span>
		</label>
	);
};

export default GenreCheckbox;
