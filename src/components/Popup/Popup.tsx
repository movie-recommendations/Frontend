import { FC, ReactNode, useEffect } from 'react';

import './Popup.css';

interface IPopup {
	children: ReactNode;
	isOpened: boolean;
	setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: FC<IPopup> = ({ children, isOpened, setIsOpened }) => {
	const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = (evt) => {
		if (evt.target === evt.currentTarget) {
			setIsOpened(false);
		}
	};

	useEffect(() => {
		const handleEscClick = (evt: KeyboardEvent) => {
			if (evt.key === 'Escape') {
				setIsOpened(false);
			}
		};

		document.addEventListener('keydown', handleEscClick);

		return () => document.removeEventListener('keydown', handleEscClick);
	}, []);

	return (
		<div
			className={`popup ${isOpened ? 'popup_opened' : ''}`}
			onClick={handleOverlayClick}
		>
			<div className="popup__container">{children}</div>
		</div>
	);
};

export default Popup;
