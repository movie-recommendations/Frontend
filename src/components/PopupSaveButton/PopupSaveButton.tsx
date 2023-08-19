import { FC } from 'react';
import './PopupSaveButton.css';

export interface IButton {
	handleButtonClick: any;
	isPopupOpen: any;
}
const PopupSaveButton: FC<IButton> = ({ handleButtonClick, isPopupOpen }) => {
	return (
		<section
			className={
				isPopupOpen
					? 'popupsavebutton-overlay popupsavebutton_open'
					: 'popupsavebutton'
			}
		>
			<div className="popupsavebutton__container">
				<p className="popupsavebutton__title">Сохранить изменения</p>
				<p className="popupsavebutton__subtitle">Изменения сохранены</p>
				<button
					className="button__main"
					// disabled
					type="button"
					onClick={handleButtonClick}
				>
					На Главную
				</button>
				<button
					className="button__close"
					// disabled
					type="button"
					onClick={handleButtonClick}
				>
					Закрыть
				</button>
			</div>
		</section>
	);
};

export default PopupSaveButton;
