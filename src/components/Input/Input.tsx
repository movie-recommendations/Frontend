import { FC, useEffect, useState } from 'react';

import { IInput } from '../../types/Input.types';

import './Input.css';

const Input: FC<IInput> = ({
	inputType,
	labelText,
	value,
	color = 'white',
	readOnly = false,
	showPasswordButton = false,
	validation,
	error = '',
	onChange,
	max,
	defaultValue,
}) => {
	const [isPasswordHidden, setIsPasswordHidden] = useState(true);

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
				{error ? <span className="input__error">{error}</span> : null}
			</div>
			<input
				{...validation}
				onChange={
					onChange
						? onChange
						: (e) => {
								validation.onChange(e);
						  }
				}
				className={`input__field input__field_color_${color} ${
					error ? 'input__field_invalid' : ''
				}`}
				type={inputTextType}
				name={inputType}
				id={inputType}
				readOnly={readOnly}
				max={max}
				defaultValue={defaultValue}
				maxLength={inputTextType === 'date' ? 8 : undefined}
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
