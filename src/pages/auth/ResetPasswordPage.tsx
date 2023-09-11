import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import jwtDecode from 'jwt-decode';
import Button from 'src/components/Button/Button';
import Input from 'src/components/Input/Input';
import { InputTypes } from 'src/types/Input.types';
import { IResetPasswordFields } from 'src/types/Auth.types';
import { useAppDispatch, useAppSelector } from 'src/services/typeHooks';
import './Auth.css';
import {
	PASSWORD_VALIDATION_CONFIG,
	VALIDATION_SETTINGS,
} from 'src/utils/constants';
import {
	resetPassword,
	selectUser,
	setUser,
} from 'src/services/redux/slices/user/user';

const ResetPasswordPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
	const [step, setStep] = useState(1);
	const [authError, setAuthError] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isDirty, isValid },
		getValues,
	} = useForm<IResetPasswordFields>({ mode: 'onChange' });

	const keyPress =  document.addEventListener("keydown", (e) => {
		if (e.code == "Escape") {
		  console.log("Closing window...");
		}
	  });


	const getTokenFromURL = () => {
		const url = window.location.href;
		const tokenStartIndex = url.indexOf('eyJ');

		if (tokenStartIndex !== -1) {
			const token = url.substring(tokenStartIndex).replace('/', '');
			return token;
		}

		return null;
	};

	const onSubmit: SubmitHandler<IResetPasswordFields> = (data) => {
		// console.log(
		// 	'data onSubmit resetPassword:',
		// 	data.password,
		// 	data.repeatPassword
		// );

		const tokenFromURL = getTokenFromURL();
		const newPassword = getValues('password');

		if (tokenFromURL) {
			try {
				dispatch(
					resetPassword({
						token: tokenFromURL,
						new_password: newPassword,
					})
				)
					.unwrap()
					.then(() => {
						const decodedToken: { exp: number; email: string } =
							jwtDecode(tokenFromURL);
						setStep(step + 1);
						reset();
						dispatch(
							setUser({ email: decodedToken.email, token: tokenFromURL })
						);
					})
					.catch((err) => {
						console.log('dispatch resetPassword with tokenFromURL err:', err);
						setAuthError(true);
					});
			} catch (error: unknown) {
				console.error('Ошибка расшифровки токена:', error);
			}
		}
		if (user.token) {
			dispatch(
				resetPassword({
					token: user.token,
					new_password: newPassword,
				})
			)
				.then(() => {
					setStep(step + 1);
					reset();
				})
				.catch((err) => {
					console.log('dispatch resetPassword wirh user.token err:', err);
					setAuthError(true);
				});
		} else {
			setAuthError(true);
		}
	};

	useEffect(() => {
		setStep(1);
		reset();
		setAuthError(false);
		document.addEventListener("keydown", (e) => {
			if (e.code == "Escape") {
				navigate('/profile');
			}
		  });
		  document.removeEventListener("keydown", (e) => {
			if (e.code == "Escape") {
				navigate('/profile');
			}
		  });
	}, []);

	return (
		<main className="auth" id="reset-password-page">
			<div className="auth__container">
				<h1 className="auth__title">Восстановить пароль</h1>
				{step === 1 ? (
					<>
						<p className="auth__hint">Введите новый пароль</p>
						<form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
							<div>
							<Input
								inputType={InputTypes.password}
								labelText="Новый пароль"
								showPasswordButton={true}
								validation={{
									...register('password', PASSWORD_VALIDATION_CONFIG),
								}}
								error={errors?.password?.message}
							/>
							<span className="input__span">
									Минимум 8 символов (заглавные и строчные латинские буквы и
									цифры)
								</span>
								</div>
							<Input
								inputType={InputTypes.repeatPassword}
								labelText="Повторите новый пароль"
								validation={{
									...register('repeatPassword', {
										validate: (value) =>
											value === watch('password') ||
											VALIDATION_SETTINGS.password.messages.noMatch,
									}),
								}}
								error={errors?.repeatPassword?.message}
							/>
							{authError ? (
								<p className="auth__form-error auth__form-error_type_login">
									Ссылка не действительна.
								</p>
							) : null}
							<Button
								buttonText={'Продолжить'}
								type="submit"
								disabled={!isDirty || !isValid}
							/>
						</form>
					</>
				) : step === 2 ? (
					<>
						<p className="auth__hint">Пароль успешно изменен</p>
						<Button
							buttonText={'Войти'}
							handleButtonClick={() => navigate('/sign-in')}
							type="button"
						/>
					</>
				) : null}
			</div>
		</main>
	);
};

export default ResetPasswordPage;
