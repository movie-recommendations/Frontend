import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import './MovieButton.css';
import { IButton } from 'src/types/Rating.types';
import { FC } from 'react';
import eye from '../../images/black_eye.svg';
import eye_clicked from '../../images/eye_clicked.svg';
import bookmark from '../../images/Bookmark.svg';
import bookmark_clicked from '../../images/bookmark_clicked.svg';
import { addFavorites, addToFavoritesApi } from 'src/services/redux/slices/favorites/favorites';
import { addToWatchApi, addWatch } from 'src/services/redux/slices/watch/watch';

const MovieButton: FC<IButton> = ({ buttonName, id }) => {
	const dispatch = useAppDispatch();
	const filmFav = useAppSelector(
		(state) => state.movies.movies.find((film) => film.id === id)?.is_favorite
	);
	const filmWatch = useAppSelector(
		(state) => state.movies.movies.find((film) => film.id === id)?.is_need_see
	);
	
	const film = useAppSelector(
		(state) => state.movies.movies.find((item) => item.id === id)
	);

	const handleClickFavorite = () => {
		dispatch(addToFavoritesApi(id))
		.unwrap()
		.then(() => dispatch(addFavorites(film)))
		.catch(() => console.log('mistake'))
	};

	const handleClickWatch = () => {
		dispatch(addToWatchApi(id))
		.unwrap()
		.then(() => dispatch(addWatch(film)))
		.catch(() => console.log('mistake'))
	};

	const typesImg =
		buttonName === 'favorites'
			? filmFav
				? bookmark_clicked
				: bookmark
			: filmWatch
			? eye_clicked
			: eye;

	const addCss =
		buttonName === 'favorites'
			? 'moviepage__button_favourite'
			: 'moviepage__button_seen';

	return (
		<section
			className={`moviepage-button__container ${addCss}`}
			onClick={
				buttonName === 'favorites' ? () => handleClickFavorite() : handleClickWatch
			}
		>
			<div className="moviepage-button" />
			<img className="moviepage-button__img" src={typesImg} alt="icon" />
		</section>
	);
};

export default MovieButton;
