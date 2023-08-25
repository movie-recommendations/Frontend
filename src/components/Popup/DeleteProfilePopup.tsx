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
		console.log('user deleted');
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
			<h4 className="popup__title">Удалить профиль</h4>
			{step === 0 ? (
				<>
					<p className="popup__text">
						Вы уверены, что хотите удалить профиль? Профиль нельзя восстановить.
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
					<p>Ваш профиль удален</p>
					<Button
						buttonText={'На Главную'}
						handleButtonClick={() => navigate('/')}
						type="button"
					/>
				</>
			)}
		</Popup>
	);
};

export default DeleteProfilePopup;
