import './LoaderMiniBlack.css';
import { FC } from 'react';

export const LoaderMiniBlack: FC = () => {
	return (
		<div className="loader-mini-black">
			<div className="loader-mini-black__container">
				<div className="loader-mini-black__img1" />
			</div>
			<div className="loader-mini-black__img_plus" />
		</div>
	);
};
