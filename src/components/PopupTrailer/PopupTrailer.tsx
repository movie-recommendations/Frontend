import { useAppSelector } from '../../services/typeHooks';
import { FC, useState, useEffect } from 'react';
import './PopupTrailer.css';
import { PopupTrailerProps } from 'src/types/Rating.types';

const PopupTrailer: FC<PopupTrailerProps> = ({
	isPopupOpen,
	switchPopupTrailer,
}) => {
	const link = useAppSelector((state) => state.movie.movie.trailer_link);
	const [iframeKey, setIframeKey] = useState(0);

	useEffect(() => {
		if (!isPopupOpen) {
			setIframeKey(iframeKey + 1);
		}
	}, [isPopupOpen]);

	return (
		<div className={`popupTrailer ${isPopupOpen ? 'popupTrailer_opened' : ''}`}>
			<div className="popupTrailer__content">
				<iframe
					key={iframeKey}
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
		</div>
	);
};

export default PopupTrailer;
