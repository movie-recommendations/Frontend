import { Link } from 'react-router-dom';

import './ProfilePage.css';
import Input from 'src/components/Input/Input';
import { InputColors, InputTypes } from 'src/types/Input.types';
import { useAppSelector } from 'src/services/typeHooks';
import { selectUser } from 'src/services/redux/slices/user/user';
import Button from 'src/components/Button/Button';

const ProfilePage = () => {
	const { email } = useAppSelector(selectUser);
	return (
		<main className="profile" id="profile-page">
			<div className="profile__form-container">
				<h1 className="profile__title">Профиль</h1>
				<form className="profile__form">
					<Input
						inputType={InputTypes.email}
						color={InputColors.black}
						labelText="Электронная почта"
						readOnly={true}
						value={email}
					/>
					<div className="profile__input-container">
						<Input
							inputType={InputTypes.password}
							color={InputColors.black}
							labelText="Пароль"
						/>
						<Link to={'/reset-password'} className="profile__input-link">
							Изменить пароль
						</Link>
					</div>
					<Input
						inputType={InputTypes.text}
						color={InputColors.black}
						labelText="Никнейм"
					/>
					<Input
						inputType={InputTypes.date}
						color={InputColors.black}
						labelText="Дата рождения"
					/>
					<div>
						<p className="profile__radio-title">Пол</p>
						<div className="profile__radio-buttons">
							<label htmlFor="male" className="profile__radio-label">
								<input
									type="radio"
									className="profile__radio-button"
									name="sex"
									id="male"
									value="male"
								/>
								<span className="profile__radio-pseudo-item"></span>
								<span className="profile__radio-text">Мужской</span>
							</label>
							<label htmlFor="female" className="profile__radio-label">
								<input
									type="radio"
									className="profile__radio-button"
									name="sex"
									id="female"
									value="female"
								/>
								<span className="profile__radio-pseudo-item"></span>
								<span className="profile__radio-text">Женский</span>
							</label>
						</div>
					</div>
				</form>
			</div>
			<div className="profile__avatar-container">
				<div className="profile__avatar">
					<p className="profile__user-first-letter">W</p>
				</div>
				<div className="profile__buttons">
					<Button
						buttonText={'Сохранить'}
						handleButtonClick={undefined}
						type="submit"
					/>
					<Link to="/preferences" className="profile__preferences-button">
						Мои предпочтения
					</Link>
					<button className="profile__delete-button">Удалить профиль</button>
				</div>
			</div>
		</main>
	);
};

export default ProfilePage;
