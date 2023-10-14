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

	useEffect(() => {
		const body = document.querySelector('body');
		if (isOpened) {
			body?.classList.add('body__scroll-lock');
		} else body?.classList.remove('body__scroll-lock');
	}, [isOpened]);

	return (
		<div
			className={`popup ${isOpened ? 'popup_opened' : ''}`}
			onClick={handleOverlayClick}
		>
			{children}
		</div>
	);
};

export default Popup;
