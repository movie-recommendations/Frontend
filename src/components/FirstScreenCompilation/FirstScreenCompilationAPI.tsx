import './FirstScreenCompilation.css';
import { RatedElement } from '../RatedElement/RatedElement';
import { IMoviesOfDay } from 'src/types/moviesoftheday.types';
import { useNavigate } from 'react-router-dom';
import {
	getMoviebyidApi,
	getMoviebyidTokenApi,
} from 'src/services/redux/slices/moviebyid/moviebyid';
import { ButtonTypes } from 'src/types/Rating.types';
import MovieButton from '../MovieButton/MovieButton';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { selectUser } from 'src/services/redux/slices/user/user';

export default function FirstScreenCompilation({
	film,
}: {
	film: IMoviesOfDay;
}) {
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
		<section className="first-screen-compilation">
			<img className="movie__img" src={film.h_picture} alt={film.title} />
			<div className="movie__overlay"></div>
			<div className="movie">
				<p className="movie__name">{film.title}</p>
				<RatedElement
					imdb={film.rating.rate_imdb}
					kinopoisk={film.rating.rate_kinopoisk}
					isSearch={false}
				/>
				<p className="movie__description">{film.short_description}</p>
				<div className="button-wraper">
					<div
						className="movie__more-detailed"
						onClick={() => handleImgClick()}
					>
						Подробнее
					</div>
					<MovieButton buttonName={ButtonTypes.favorites} id={film.id} />
				</div>
			</div>
		</section>
	);
}
