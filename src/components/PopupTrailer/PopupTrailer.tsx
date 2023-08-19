import { useAppSelector } from '../../services/typeHooks';
import { FC } from 'react';
import './PopupTrailer.css';
import { PopupTrailerProps } from 'src/types/Rating.types';

const PopupTrailer: FC<PopupTrailerProps> = ({
	isPopupOpen,
	switchPopupTrailer,
}) => {
	const link = useAppSelector((state) => state.movie.movie.trailer_link);

	return (
		<div className={`popupTrailer ${isPopupOpen ? 'popupTrailer_opened' : ''}`}>
			<iframe
				width="720"
				height="480"
				src={link}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			/>
			<button
				className="popupTrailer__close"
				type="button"
				onClick={switchPopupTrailer}
			/>
		</div>
	);
};

export default PopupTrailer;
