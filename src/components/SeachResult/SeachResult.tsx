import './SeachResult.css';
import { IFilms } from 'src/types/Film.types';
import { RatedElement } from '../RatedElement/RatedElement';
import { IMovieCard } from 'src/types/MovieCard.types';

export const SeachResult = ({ film }: { film: IMovieCard }) => {
	return (
		<section className="search">
			<div className="search_img-container">
				<img className="search_img" src={film.v_picture} alt="" />
			</div>
			<div className="search_profile">
				<h1 className="search_title">{film.title}</h1>
				<h3 className="search_h3">{`${film.genres.join(', ')} • ${
					film.year
				}`}</h3>
				{/* <h3 className="search_h3">{film.country.join(', ')}</h3> */}
				{/* <h3 className="search_h3">{`Режисер: ${film.director
					.map((dir) => dir.first_name + ' ' + dir.last_name)
					.join(', ')}`}</h3>
				<h3 className="search_h3">{`В ролях: ${film.actor
					.map((actor) => actor.first_name + ' ' + actor.last_name)
					.join(', ')}`}</h3> */}
				<RatedElement
					imdb={film.rating.rate_imdb}
					kinopoisk={film.rating.rate_kinopoisk}
					isSearch={false}
				/>
			</div>
		</section>
	);
};
