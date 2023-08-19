import './FirstScreenCompilation.css';
import { Link } from 'react-router-dom';
import { RatedElement } from '../RatedElement/RatedElement';
import { IFilms } from '../../types/Film.types';

export default function FirstScreenCompilation({ film }: { film: IFilms }) {
	return (
		<section className="first-screen-compilation">
			<img className="movie__img" src={film.imageUrl} alt={film.title} />
			<div className="movie">
				<p className="movie__name">Переводчик</p>
				<RatedElement
					imdb={film.rating.imdb}
					kinopoisk={film.rating.kinopoisk}
					isSearch={false}
				/>
				<p className="movie__description">{film.shortDescription}</p>
				<div className="button-wraper">
					<Link to="/movie-page" className="movie__more-detailed">
						Подробнее
					</Link>
					<button className="movie__bookmark"></button>
				</div>
			</div>
		</section>
	);
}
