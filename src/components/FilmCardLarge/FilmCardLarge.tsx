import './FilmCardLarge.css';
import { RatedElement } from 'src/components/RatedElement/RatedElement';
import { BookmarkSmall } from 'src/components/Bookmark_small/Bookmark_small';
import { IMovieCard } from 'src/types/MovieCard.types';
import { useNavigate } from 'react-router-dom';
import { getMoviebyidApi, getMoviebyidTokenApi } from 'src/services/redux/slices/moviebyid/moviebyid';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { selectUser } from 'src/services/redux/slices/user/user';

export const FilmCardLarge = ({ film }: { film: IMovieCard }) => {
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
		<section key={film.id} className="specailforyou_card">
			<img
				className="specailforyou_card-img"
				src={film.v_picture}
				alt=""
				onClick={handleImgClick}
			/>
			<div className="bookmark-large">{<BookmarkSmall id={film.id} />}</div>
			<h4 className="specailforyou_card-title">{film.title}</h4>
			<p className="specailforyou_card-subtitle">{`${film.genres.join(
				', '
			)} • ${film.year}`}</p>
			<RatedElement
				imdb={film.rating.rate_imdb}
				kinopoisk={film.rating.rate_kinopoisk}
				isSearch={false}
			/>
		</section>
	);
};
