import { FC, useState } from 'react';
import './GenreCheckbox.css';
import { IGenreCheckbox } from 'src/types/GenreCheckbox.types';
import { useLocation } from 'react-router';

const GenreCheckbox: FC<IGenreCheckbox> = ({
	id,
	text,
	color = 'white',
	checked,
	onChange,
	readOnly = false,
	image,
	defaultChecked,
}) => {
	const [isChecked, setIsChecked] = useState(checked || false);
	const location = useLocation();
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
				className={
					location.pathname === '/preferences'
						? `genre-checkbox__input genre-checkbox__input_type_preferences genre-checkbox__input_color_${color} ${
								readOnly ? 'genre-checkbox__input_disabled' : ''
						  }`
						: `${
								location.pathname === '/sign-up'
									? `genre-checkbox__input genre-checkbox__input_type_sign-up genre-checkbox__input_color_${color} ${
											readOnly ? 'genre-checkbox__input_disabled' : ''
									  }`
									: `genre-checkbox__input genre-checkbox__input_color_${color} ${
											readOnly ? 'genre-checkbox__input_disabled' : ''
									  }`
						  }`
				}
				type="checkbox"
				checked={checked || isChecked}
				onChange={handleChange}
				value={id}
				readOnly={readOnly}
				// defaultChecked={defaultChecked}
			/>

			<span
				className={
					location.pathname === '/preferences'
						? `genre-checkbox__appearance genre-checkbox__appearance_type_preferences genre-checkbox__appearance_color_${color} ${
								readOnly ? 'genre-checkbox__input_disabled' : ''
						  }`
						: `${
								location.pathname === '/sign-up'
									? `genre-checkbox__appearance genre-checkbox__appearance_type_sign-up genre-checkbox__appearance_color_${color} ${
											readOnly ? 'genre-checkbox__input_disabled' : ''
									  }`
									: `genre-checkbox__appearance genre-checkbox__appearance_color_${color} ${
											readOnly ? 'genre-checkbox__input_disabled' : ''
									  }`
						  }`
				}
			>
				<img className="genre-checkbox__appearance-img" src={image} />
				<p className="genre-checkbox__appearance-text">{text}</p>
			</span>
		</label>
	);
};

export default GenreCheckbox;
