import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import { FC, useState } from 'react';
import Popup from './Popup';
import { useAppDispatch, useAppSelector } from 'src/services/typeHooks';
import { deleteUser, selectUser } from 'src/services/redux/slices/user/user';

interface IDeleteProfilePopup {
	isOpened: boolean;
	setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteProfilePopup: FC<IDeleteProfilePopup> = ({
	isOpened,
	setIsOpened,
}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const user = useAppSelector(selectUser);
	const [step, setStep] = useState(0);

	const onDeleteClick = () => {
		dispatch(deleteUser(user.token))
			.unwrap()
			.then((res) => {
				console.log('dispatch deleteUser res', res);
				setStep(step + 1);
			})
			.catch((err) => console.log('dispatch deleteUser err', err));
	};

	return (
		<Popup isOpened={isOpened} setIsOpened={setIsOpened}>
			<div className="popup__container">
				<button
					type="button"
					className="popup__x-btn"
					onClick={() => setIsOpened(false)}
				></button>

				{step === 0 ? (
					<>
						<h4 className="popup__title popup__title_type_delete-profile">
							Удалить профиль
						</h4>
						<p className="popup__text popup__text_type_delete-profile">
							Вы уверены, что хотите удалить профиль? Профиль нельзя
							восстановить.
						</p>
						<Button
							buttonText={'Да, удалить'}
							handleButtonClick={onDeleteClick}
							type="button"
						/>
						<button className="popup__close" onClick={() => setIsOpened(false)}>
							Нет, отменить удаление
						</button>
					</>
				) : (
					<>
						<h4 className="popup__title popup__title_type_profile-deleted">
							Удалить профиль
						</h4>
						<p className="popup__subtitle_type_profile-deleted">
							Ваш профиль удален
						</p>
						<Button
							buttonText={'На Главную'}
							handleButtonClick={() => navigate('/')}
							type="button"
						/>
					</>
				)}
			</div>
		</Popup>
	);
};

export default DeleteProfilePopup;
