import './Btn_bookmark.css';
import img_bookmark_default from '../../images/btn_bookmark_default.svg';
import img_bookmark_pressed from '../../images/btn_bookmark_pressed.svg';
import img_watch_default from '../../images/btn_watch_default.svg';
import img_watch_pressed from '../../images/btn_watch_pressed.svg';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import {
	updateFavorite,
	updateWatch,
} from 'src/services/redux/slices/films/films';

export const BtnBookmark = ({
	nameTypes,
	id,
}: {
	nameTypes: string;
	id: number;
}) => {
	const dispatch = useAppDispatch();
	const filmFav = useAppSelector(
		(state) => state.films.films.find((film) => film.id === id)?.is_favorite
	);
	const filmWatch = useAppSelector(
		(state) => state.films.films.find((film) => film.id === id)?.must_see
	);

	const handleClickFavorite = () => {
		dispatch(updateFavorite({ favorite: !filmFav, id }));
	};

	const handleClickWatch = () => {
		dispatch(updateWatch({ watch: !filmWatch, id }));
	};

	const typesImg =
		nameTypes === 'favorite'
			? filmFav
				? img_bookmark_pressed
				: img_bookmark_default
			: filmWatch
			? img_watch_pressed
			: img_watch_default;

	return (
		<section
			className="bookmark_favorite"
			onClick={
				nameTypes === 'favorite' ? handleClickFavorite : handleClickWatch
			}
		>
			<div className="bookmark_fon" />
			<img className="bookmark_img" src={typesImg} alt="icon" />
		</section>
	);
};
