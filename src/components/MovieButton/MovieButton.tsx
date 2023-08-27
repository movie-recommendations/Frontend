import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import './MovieButton.css';
import { IButton } from 'src/types/Rating.types';
import { FC } from 'react';
import eye from '../../images/black_eye.svg';
import eye_clicked from '../../images/eye_clicked.svg';
import bookmark from '../../images/Bookmark.svg';
import bookmark_clicked from '../../images/bookmark_clicked.svg';
import {
	addToFavoritesApi,
	deleteFromFavoritesApi,
	addToWatchApi,
	deleteFromWatchApi,
	getFavoritesApi,
	getWatchListApi,
} from 'src/services/redux/slices/favorites/favorites';
import { selectUser } from '../../services/redux/slices/user/user';

const MovieButton: FC<IButton> = ({ buttonName, id }) => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);

	const filmFav = useAppSelector(
		(state) =>
			state.favoritemovies.favorites?.find((film) => film.id === id)
				?.is_favorite
	);
	const filmWatch = useAppSelector(
		(state) =>
			state.favoritemovies.watchlist?.find((film) => film.id === id)
				?.is_need_see
	);
	const favorites = useAppSelector((state) => state.favoritemovies.favorites);
	const watchList = useAppSelector((state) => state.favoritemovies.watchlist);

	const handleClickFavorite = async () => {
		const favoriteIds = favorites.map((film) => film.id);
		if (favoriteIds.includes(id)) {
			await dispatch(deleteFromFavoritesApi({ id, token: user.token }));
		} else {
			await dispatch(addToFavoritesApi({ id, token: user.token }));
		}
		await dispatch(getFavoritesApi(user.token));
	};

	const handleClickWatch = async () => {
		const watchIds = watchList.map((film) => film.id);
		if (watchIds.includes(id)) {
			await dispatch(deleteFromWatchApi({ id, token: user.token }));
		} else {
			await dispatch(addToWatchApi({ id, token: user.token }));
		}
		await dispatch(getWatchListApi(user.token));
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
		<>
			{user.token ? (
				<section
					className={`moviepage-button__container ${addCss}`}
					onClick={
						buttonName === 'favorites'
							? () => handleClickFavorite()
							: () => handleClickWatch()
					}
				>
					<div className="moviepage-button" />
					<img className="moviepage-button__img" src={typesImg} alt="icon" />
				</section>
			) : null}
		</>
	);
};

export default MovieButton;
