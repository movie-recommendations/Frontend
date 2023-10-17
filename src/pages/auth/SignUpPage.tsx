import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import './Auth.css';
import Input from 'src/components/Input/Input';
import BackButton from 'src/components/BackButton/BackButton';
import { InputTypes } from 'src/types/Input.types';
import Button from '../../components/Button/Button';
import Slider from 'src/components/Slider/Slider';
import { SliderTypes } from 'src/types/Slider.types';
import { useAppDispatch, useAppSelector } from 'src/services/typeHooks';
import { ISignUpData, ISignUpFields } from 'src/types/Auth.types';
import {
	EMAIL_VALIDATION_CONFIG,
	PASSWORD_VALIDATION_CONFIG,
	VALIDATION_SETTINGS,
} from 'src/utils/constants';
import { checkEmail, signUpUser } from 'src/services/redux/slices/user/user';
import { selectGenres } from 'src/services/redux/slices/genres/genres';
import { useResize } from 'src/hooks/useResize';
import GenreCheckbox from 'src/components/GenreCheckbox/GenreCheckbox';
const SignUpPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const genres = useAppSelector(selectGenres);
	const [step, setStep] = useState<number>(1);
	const [userData, setUserData] = useState<ISignUpData>({
		email: '',
		password: '',
		fav_genres: [],
	});
	const [authError, setAuthError] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isDirty, isValid },
		getValues,
	} = useForm<ISignUpFields>({ mode: 'onChange' });

	//JSX constants

	const formSteps = (
		<div className="auth__steps-container">
			<p className="auth__steps">Шаг {step} из 2</p>
			{step === 2 ? (
				<button className="auth__back-button" onClick={() => setStep(step - 1)}>
					Назад
				</button>
			) : null}
		</div>
	);

	const formTitle = (
		<h1 className="auth__title auth__title_type_sign-up">
			Создать учетную запись
		</h1>
	);
	const { width } = useResize();
	const formLink = (
		<p className="auth__link-text">
			{`${
				width > 1000 ? `У вас уже есть учетная запись?` : 'Есть учетная запись?'
			}`}
			<Link to="/sign-in" className="auth__link">
				Войти
			</Link>
		</p>
	);

	// get checked genres

	const handleGenreSelection = (selectedGenres: number[]) => {
		setUserData((prevUserData) => ({
			...prevUserData,
			fav_genres: selectedGenres,
		}));
	};

	// button handlers

	const onSubmitFirstStep: SubmitHandler<ISignUpFields> = () => {
		const userEmail = getValues('email');
		const userPassword = getValues('password');
		dispatch(checkEmail(userEmail))
			.unwrap()
			.then(() => {
				setUserData({
					email: userEmail,
					password: userPassword,
					fav_genres: [],
				});
				setStep(step + 1);
			})
			.catch((err) => {
				console.log(' dispatch(checkEmail(userEmail)) res', err);
				setAuthError(true);
			});
	};

	const onSubmitSecondStep = () => {
		dispatch(signUpUser(userData))
			.unwrap()
			.then(() => {
				setStep(step + 1);
			})
			.catch((err) => {
				console.log(' dispatch(signUpUser(userData)) res', err);
			});
	};

	const onClickThirdStep = () => {
		navigate('/');
		reset();
	};

	useEffect(() => {
		reset();
		setAuthError(false);
	}, []);
	const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

	const handleCheckboxChange = (id: number, checked: boolean) => {
		const newSelectedGenres = checked
			? [...selectedGenres, id]
			: selectedGenres.filter((genreId) => genreId !== id);

		setSelectedGenres(newSelectedGenres);
	};
	return (
		<main className="auth" id="sign-up-page">
			<BackButton
				type={'button'}
				buttonText={`${width <= 1000 ? '' : 'Назад'}`}
				handleButtonClick={() => navigate(-1)}
			/>
			<div className="auth__container auth__container_type_auth">
				{step === 1 ? (
					<>
						{formSteps}
						{formTitle}
						<p className="auth__hint">
							Зарегистрируйтесь с помощью электронной почты
						</p>
						{width > 1000 ? formLink : null}
						<form
							className="auth__form auth__form_type_sign-up"
							onSubmit={handleSubmit(onSubmitFirstStep)}
							noValidate
						>
							<Input
								inputType={InputTypes.email}
								labelText={'Электронная почта'}
								validation={{
									...register('email', EMAIL_VALIDATION_CONFIG),
								}}
								error={errors?.email?.message}
							/>
							<div>
								<Input
									inputType={InputTypes.password}
									labelText={'Пароль'}
									showPasswordButton={true}
									validation={{
										...register('password', PASSWORD_VALIDATION_CONFIG),
									}}
									error={errors?.password?.message}
								/>
								<span className="input__span input__span_type_password">
									Минимум 8 символов (заглавные и строчные латинские буквы и
									цифры)
								</span>
							</div>
							<Input
								inputType={InputTypes.repeatPassword}
								labelText={'Повторите пароль'}
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
									Почта уже зарегистрирована.
								</p>
							) : null}
							<Button
								buttonText={'Продолжить'}
								type="submit"
								disabled={!isDirty || !isValid}
							/>
						</form>
						{width <= 1000 ? formLink : null}
					</>
				) : step === 2 ? (
					<>
						{formSteps}
						{formTitle}
						{width > 1000 ? formLink : null}
						<p className="auth__hint">Выберите любимые жанры</p>
						<form
							className="auth__form auth__form_type_sign-up"
							onSubmit={handleSubmit(onSubmitSecondStep)}
						>
							{' '}
							{width > 1000 ? (
								<Slider
									contentType={SliderTypes.genresBlock}
									content={genres}
									onGenreSelection={handleGenreSelection}
								/>
							) : (
								<ul className="auth__form-list-preferences">
									{genres.map((genre) => (
										<li key={genre.id} className="auth__form-item-preferences">
											<GenreCheckbox
												text={genre.title}
												id={genre.id}
												onChange={handleCheckboxChange}
												image={genre.picture}
											/>
										</li>
									))}
								</ul>
							)}
							<Button buttonText={'Продолжить'} type="submit" />
						</form>
					</>
				) : (
					<>
						{formTitle}
						{formLink}
						<p className="auth__hint">
							Ссылка для подтверждения отправлена на указанную почту
						</p>
						<p className="auth__email">{getValues('email')}</p>
						<Button
							buttonText={'Перейти на Главную'}
							handleButtonClick={onClickThirdStep}
							type="button"
						/>
					</>
				)}
			</div>
		</main>
	);
};

export default SignUpPage;
