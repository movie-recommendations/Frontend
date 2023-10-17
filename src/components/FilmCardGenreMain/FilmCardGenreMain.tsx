import './FilmCardGenreMain.css';
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

export const FilmCardGenreMain = ({ film }: { film: IMovieCard }) => {
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
		<article key={film.id} className="filmpage_card">
			<div className="filmpage-card-img__background" onClick={handleImgClick}>
				<img className="filmpage_card-img" src={film.v_picture} alt="" />
			</div>
			<div className="bookmark-small">{<BookmarkSmall id={film.id} />}</div>
			<h4 className="filmpage_card-title">{film.title}</h4>
			<p className="filmpage_card-subtitle">{`${`${film.genres[0]}`}${
				film.genres[1] ? `, ${film.genres[1]}` : ''
			} • ${film.year}`}</p>
			<RatedElement
				imdb={film.rating.rate_imdb}
				kinopoisk={film.rating.rate_kinopoisk}
				isSearch={false}
			/>
		</article>
	);
};
