import { FC, useState } from 'react';
import './CheckboxMain.css';

const CheckboxMain = ({
	text,
	id,
	onChange,
}: {
	text: string;
	id?: string;
	onChange: (text: string) => void;
}) => {
	const [checked, setChecked] = useState(false);

	const handleChange = () => {
		setChecked(!checked);
		onChange(text);
	};

	return (
		<label className="genre-checkbox">
			<input
				className="genre-checkbox__input"
				type="checkbox"
				checked={checked}
				onChange={handleChange}
				id={id}
			/>
			<span className="genre-checkbox__appearance">{text}</span>
		</label>
	);
};

export default CheckboxMain;
