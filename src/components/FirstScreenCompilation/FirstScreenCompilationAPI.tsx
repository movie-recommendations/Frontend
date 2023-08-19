import './FirstScreenCompilation.css';
import { RatedElement } from '../RatedElement/RatedElement';
import { IMoviesOfDay } from 'src/types/moviesoftheday.types';
import { useNavigate } from 'react-router-dom';
import { getMoviebyidApi } from 'src/services/redux/slices/moviebyid/moviebyid';
import { useAppDispatch } from '../../services/typeHooks';
import { ButtonTypes } from 'src/types/Rating.types';
import MovieButton from '../MovieButton/MovieButton';

export default function FirstScreenCompilation({
	film,
}: {
	film: IMoviesOfDay;
}) {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleImgClick = (filmId: number) => {
		dispatch(getMoviebyidApi(filmId));
		navigate('/movie-page');
		window.scrollTo(0, 0);
	};
	return (
		<section className="first-screen-compilation">
			<img className="movie__img" src={film.h_picture} alt={film.title} />
			<div className="movie">
				<p className="movie__name">{film.title}</p>
				<RatedElement
					imdb={film.rate_imdb}
					kinopoisk={film.rate_kinopoisk}
					isSearch={false}
				/>
				<p className="movie__description">{film.short_description}</p>
				<div className="button-wraper">
					<div className="movie__more-detailed"
						onClick={() => handleImgClick(film.id)}
					>
						Подробнее
					</div>
					<MovieButton buttonName={ButtonTypes.favorites} id={film.id} />
				</div>
			</div>
		</section>
	);
}
