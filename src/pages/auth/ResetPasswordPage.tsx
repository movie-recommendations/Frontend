import { useEffect, useState } from 'react';
import Button from 'src/components/Button/Button';
import Input from 'src/components/Input/Input';
import { InputTypes } from 'src/types/Input.types';
import { useNavigate } from 'react-router-dom';

import './Auth.css';

const ResetPasswordPage = () => {
	const navigate = useNavigate();
	const [step, setStep] = useState(1);

	useEffect(() => {
		setStep(1);
	}, []);

	const formHint =
		step === 1
			? 'Введите новый пароль'
			: step === 2
			? 'Пароль успешно изменен'
			: null;

	return (
		<main className="auth" id="reset-password-page">
			<div className="auth__container">
				<h1 className="auth__title">Восстановить пароль</h1>
				<p className="auth__hint">{formHint}</p>
				{step === 1 ? (
					<form className="auth__form">
						<Input
							inputType={InputTypes.password}
							labelText="Новый пароль"
							showPasswordButton={true}
						/>
						<Input
							inputType={InputTypes.repeatPassword}
							labelText="Повторите новый пароль"
						/>
						<Button
							buttonText={'Продолжить'}
							handleButtonClick={() => setStep(step + 1)}
							type="submit"
						/>
					</form>
				) : step === 2 ? (
					<>
						<p className="auth__email">Пароль успешно изменен</p>
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
