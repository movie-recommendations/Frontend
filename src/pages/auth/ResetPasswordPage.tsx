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
	signOut,
} from 'src/services/redux/slices/user/user';

const ResetPasswordPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [step, setStep] = useState(1);

	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isDirty, isValid },
		getValues,
	} = useForm<IResetPasswordFields>({ mode: 'onChange' });

	const getTokenFromURL = () => {
		const url = window.location.href;
		const tokenStartIndex = url.indexOf('eyJ');

		if (tokenStartIndex !== -1) {
			const token = url.substring(tokenStartIndex).replace('/', '');
			console.log('token token token', token);
			return token;
		}

		return null;
	};

	const onSubmit: SubmitHandler<IResetPasswordFields> = (data) => {
		console.log(
			'data onSubmit resetPassword:',
			data.password,
			data.repeatPassword
		);

		const token = getTokenFromURL();

		if (token) {
			try {
				const newPassword = getValues('password');
				dispatch(
					resetPassword({
						token: token,
						new_password: newPassword,
					})
				)
					.unwrap()
					.then(() => {
						const decodedToken: { exp: number; email: string } =
							jwtDecode(token);
						console.log('decodedToken', decodedToken);
						setStep(step + 1);
						reset();
						dispatch(setUser({ email: decodedToken.email, token: token }));
					})
					.catch((err) => {
						console.log('dispatch resetPassword err:', err);
					});
			} catch (error: any) {
				console.error('Ошибка расшифровки токена:', error.message);
			}
		}
	};

	useEffect(() => {
		setStep(1);
	}, []);

	return (
		<main className="auth" id="reset-password-page">
			<div className="auth__container">
				<h1 className="auth__title">Восстановить пароль</h1>
				{step === 1 ? (
					<>
						<p className="auth__hint">Введите новый пароль</p>
						<form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
							<Input
								inputType={InputTypes.password}
								labelText="Новый пароль"
								showPasswordButton={true}
								validation={{
									...register('password', PASSWORD_VALIDATION_CONFIG),
								}}
								error={errors?.password?.message}
							/>
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
