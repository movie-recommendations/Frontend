import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import { FC, useEffect } from 'react';
import Popup from './Popup';

interface IChangesSavedPopup {
	isOpened: boolean;
	setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangesSavedPopup: FC<IChangesSavedPopup> = ({
	isOpened,
	setIsOpened,
}) => {
	const navigate = useNavigate();

	return (
		<Popup isOpened={isOpened} setIsOpened={setIsOpened}>
			<div className="popup__container">
				<h4 className="popup__title">Сохранить изменения</h4>
				<p className="popup__text">Изменения сохранены</p>
				<Button
					buttonText={'На Главную'}
					handleButtonClick={() => navigate('/')}
					type="button"
				/>
				<button className="popup__close" onClick={() => setIsOpened(false)}>
					Закрыть
				</button>
			</div>
		</Popup>
	);
};

export default ChangesSavedPopup;
