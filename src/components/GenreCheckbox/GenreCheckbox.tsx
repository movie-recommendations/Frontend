import { FC, useState } from 'react';
import './GenreCheckbox.css';
import { IGenreCheckbox } from 'src/types/GenreCheckbox.types';

const GenreCheckbox: FC<IGenreCheckbox> = ({
	id,
	text,
	color = 'white',
	checked,
	onChange,
	readOnly = false,
}) => {
	const [isChecked, setIsChecked] = useState(checked || false);

	const handleChange = () => {
		if (onChange) {
			const newChecked = !isChecked;
			setIsChecked(newChecked);
			onChange(id, newChecked);
		} else {
			setIsChecked(!isChecked);
		}
	};

	return (
		<label className={`genre-checkbox genre-checkbox_color_${color}`}>
			<input
				className={`genre-checkbox__input genre-checkbox__input_color_${color}`}
				type="checkbox"
				checked={checked || isChecked}
				onChange={handleChange}
				value={id}
				readOnly={readOnly}
			/>
			<span
				className={`genre-checkbox__appearance genre-checkbox__appearance_color_${color}`}
			>
				{text}
			</span>
		</label>
	);
};

export default GenreCheckbox;
