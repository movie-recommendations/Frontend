import './FilmCard.css';
import { RatedElement } from 'src/components/RatedElement/RatedElement';
import { BookmarkSmall } from 'src/components/Bookmark_small/Bookmark_small';
import { IMovieCard } from 'src/types/MovieCard.types';
import { useNavigate } from 'react-router-dom';
import {
	getMoviebyidApi,
	getMoviebyidTokenApi,
} from 'src/services/redux/slices/moviebyid/moviebyid';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { selectUser } from 'src/services/redux/slices/user/user';

export const FilmCard = ({ film }: { film: IMovieCard }) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);

	const handleImgClick = () => {
		if (user.token) {
			dispatch(getMoviebyidTokenApi({ filmId: film.id, token: user.token }));
		} else {
			dispatch(getMoviebyidApi(film.id));
		}
		navigate('/movie-page');
		window.scrollTo(0, 0);
	};

	return (
		<article key={film.id} className="flanks_card">
			<img
				className="flanks_card-img"
				src={film.h_picture}
				alt=""
				onClick={handleImgClick}
			/>
			<div className="bookmark-small">{<BookmarkSmall id={film.id} />}</div>
			<h4 className="flanks_card-title">{film.title}</h4>
			<p className="flanks_card-subtitle">{`${film.genres.join(', ')} • ${
				film.year
			}`}</p>
			<RatedElement
				imdb={film.rating.rate_imdb}
				kinopoisk={film.rating.rate_kinopoisk}
				isSearch={false}
			/>
		</article>
	);
};
