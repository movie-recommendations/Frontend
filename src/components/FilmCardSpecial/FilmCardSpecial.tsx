import './FilmCardSpecial.css';
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
import { useResize } from '../../hooks/useResize';

export const FilmCardSpecial = ({ film }: { film: IMovieCard }) => {
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
		<article key={film.id} className="specialmovie_card">
			<div
				className="specialmovie-card-img__background"
				onClick={handleImgClick}
			>
				<img className="specialmovie_card-img" src={film.v_picture} alt="" />
			</div>
			<div className="bookmark_special">{<BookmarkSmall id={film.id} />}</div>
			<h4 className="specialmovie_card-title">{film.title}</h4>
			<p className="specialmovie_card-subtitle">{`${film.genres.join(', ')} • ${
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
