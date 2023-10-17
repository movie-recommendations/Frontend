import { FC, useEffect, useState } from 'react';

import { IInput } from '../../types/Input.types';
import { useLocation } from 'react-router';

import { useResize } from 'src/hooks/useResize';
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
	const { width } = useResize();
	useEffect(() => {
		setIsPasswordHidden(true);
	}, []);

	function togglePassword() {
		setIsPasswordHidden(!isPasswordHidden);
	}
	const location = useLocation();
	const inputTextType =
		inputType === 'password' && isPasswordHidden === false
			? 'text'
			: inputType === 'repeatPassword'
			? 'password'
			: inputType;

	return (
		<>
			{' '}
			{width >= 1000 ? (
				<div className="input__container input__container_type_desktop">
					<div
						className={
							location.pathname === '/profile'
								? 'input__hints input__hints_type_profile'
								: 'input__hints'
						}
					>
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
						className={`input__field input__field_type_${inputType} input__field_color_${color} ${
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
			) : (
				<div className="input__container input__container_type_mobile">
					<div
						className={
							location.pathname === '/profile'
								? 'input__hints input__hints_type_profile'
								: 'input__hints'
						}
					>
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
						className={`input__field input__field_type_${inputType} input__field_color_${color} ${
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
					<div className="input__error-container">
						{' '}
						{error ? <span className="input__error">{error}</span> : null}
					</div>
					{showPasswordButton ? (
						<button
							className="input__button"
							type="button"
							onClick={togglePassword}
						/>
					) : null}
				</div>
			)}
		</>
	);
};

export default Input;
