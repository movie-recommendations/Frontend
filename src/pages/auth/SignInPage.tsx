import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import Input from 'src/components/Input/Input';
import { InputTypes } from 'src/types/Input.types';
import Button from 'src/components/Button/Button';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from 'src/services/typeHooks';
import { ISignInData, ISignInFields } from 'src/types/Auth.types';
import {
	getUserInfo,
	setUser,
	signInUser,
} from 'src/services/redux/slices/user/user';
import {
	EMAIL_VALIDATION_CONFIG,
	PASSWORD_VALIDATION_CONFIG,
} from 'src/utils/constants';

const SignInPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [authError, setAuthError] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isDirty, isValid },
		getValues,
	} = useForm<ISignInFields>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<ISignInFields> = () => {
		const formValues = getValues();

		dispatch(signInUser(formValues as ISignInData))
			.unwrap()
			.then((res) => {
				dispatch(setUser({ email: formValues.email, token: res }));

				navigate('/');
				reset();
				return res;
			})
			.then((res) => dispatch(getUserInfo(res)))
			.catch((err) => {
				if (err.status === 404 || err.status === 400) {
					setAuthError(true);
				}
				console.log('dispatch signInUser err:', err);
			});
	};

	useEffect(() => {
		reset();
		setAuthError(false);
	}, []);

	return (
		<main className="auth" id="sign-in-page">
			<div className="auth__container">
				<h1 className="auth__title">Войти</h1>
				<p className="auth__link-text">
					Новый пользователь?
					<Link to="/sign-up" className="auth__link">
						Создать учетную запись
					</Link>
				</p>
				<form
					className="auth__form auth__form_type_sign-in"
					onSubmit={handleSubmit(onSubmit)}
					noValidate
				>
					<Input
						inputType={InputTypes.email}
						labelText="Электронная почта"
						validation={{
							...register('email', EMAIL_VALIDATION_CONFIG),
						}}
						error={errors?.email?.message}
						// maxLength={VALIDATION_SETTINGS.email.maxLength}
					/>
					<Input
						inputType={InputTypes.password}
						labelText="Пароль"
						showPasswordButton={true}
						validation={{ ...register('password', PASSWORD_VALIDATION_CONFIG) }}
						error={errors?.password?.message}
					/>
					{authError ? (
						<p className="auth__form-error auth__form-error_type_login">
							Неверный логин или пароль.
						</p>
					) : null}
					<Button
						buttonText={'Продолжить'}
						type="submit"
						disabled={!isDirty || !isValid}
					/>
				</form>
				<Link to="/recover-password" className="auth__link auth__recover-link">
					Забыли пароль?
				</Link>
			</div>
		</main>
	);
};

export default SignInPage;
