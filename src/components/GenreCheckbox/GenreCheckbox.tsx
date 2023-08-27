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
	defaultChecked,
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
		<label
			className={`genre-checkbox genre-checkbox_color_${color} ${
				readOnly ? 'genre-checkbox__input_disabled' : ''
			}`}
		>
			<input
				className={`genre-checkbox__input genre-checkbox__input_color_${color} ${
					readOnly ? 'genre-checkbox__input_disabled' : ''
				}`}
				type="checkbox"
				checked={checked || isChecked}
				onChange={handleChange}
				value={id}
				readOnly={readOnly}
				// defaultChecked={defaultChecked}
			/>
			<span
				className={`genre-checkbox__appearance genre-checkbox__appearance_color_${color} ${
					readOnly ? 'genre-checkbox__input_disabled' : ''
				}`}
			>
				{text}
			</span>
		</label>
	);
};

export default GenreCheckbox;
