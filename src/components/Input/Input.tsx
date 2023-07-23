import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { IInput } from '../../types/Input.types';

import './Input.css';

const Input: FC<IInput> = ({
	inputType,
	labelText,
	value,
	color = 'white',
	readOnly = false,
	showPasswordButton = false,
}) => {
	const location = useLocation();
	const currentPath = location.pathname;

	const [isPasswordHidden, setIsPasswordHidden] = useState(true);

	const [error, setError] = useState(false);

	useEffect(() => {
		setIsPasswordHidden(true);
	}, []);

	function togglePassword() {
		setIsPasswordHidden(!isPasswordHidden);
	}

	const inputTextType =
		inputType === 'password' && isPasswordHidden === false
			? 'text'
			: inputType === 'repeatPassword'
			? 'password'
			: inputType;

	return (
		<div className="input__container">
			<div className="input__hints">
				{labelText ? (
					<label
						className={`input__label input__label_color_${
							color !== 'white' ? 'white' : 'black'
						}`}
						htmlFor={inputType}
					>
						{labelText}
					</label>
				) : null}
				{error ? (
					<span className="input__error">
						Только кириллица или латинские буквы
					</span>
				) : null}
			</div>
			<input
				className={`input__field input__field_color_${color}`}
				type={inputTextType}
				name={inputType}
				id={inputType}
				readOnly={readOnly}
				value={readOnly && value ? value : undefined}
			/>
			{showPasswordButton ? (
				<button
					className="input__button"
					type="button"
					onClick={togglePassword}
				/>
			) : null}
		</div>
	);
};

export default Input;
