import { useNavigate } from 'react-router';
import Button from 'src/components/Button/Button';

import './Auth.css';

const ConfirmEmailPage = () => {
	const navigate = useNavigate();

	return (
		<main className="auth" id="confirm-email-page">
			<div className="auth__container">
				<h1 className="auth__title">Создать учетную запись</h1>
				<p className="auth__hint">Ваша почта успешно подтверждена</p>

				<Button
					buttonText={'Войти'}
					handleButtonClick={() => navigate('/sign-in')}
				/>
			</div>
		</main>
	);
};

export default ConfirmEmailPage;
