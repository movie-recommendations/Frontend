import { useAppSelector } from '../../services/typeHooks';
import './MoviePage.css';
import ActorsList from '../../components/Actors/ActorsList';
import { RatedElement } from '../../components/RatedElement/RatedElement';
import MovieButton from '../../components/MovieButton/MovieButton';
import { ButtonTypes } from '../../types/Rating.types';
import TrailerButton from '../../components/TrailerButton/TrailerButton';
import { FC } from 'react';
import RatingElement from 'src/components/RatingElement/RatingElement';
import FilmAbout from 'src/components/FilmAbout/FilmAbout';
import FilmDescription from 'src/components/FilmDescription/FilmDescription';
import { Loader } from 'src/components/Loader/Loader';
import { SlickSliderMini } from 'src/components/SlickSliderMini/SlickSliderMini';


const MoviePage: FC = () => {
	const movie = useAppSelector((state) => state.moviebyid.movie);
	const loading = useAppSelector((state) => state.moviebyid.status)
	const films = useAppSelector((state) => state.movies.movies);
	
	return (
		<>
			{loading === 'loading' ? (
				<Loader />
			) : (
				<section className="moviepage">
					<img className="background-image" alt="" src={movie.h_picture} />
					<div className="moviepage__container">
						<div className="movie-block">
							<img className="movie-block__img" alt="" src={movie.v_picture} />
							<div className="movie-block__text">
								<div>
									<h2 className="movie-block__text_title">{movie.title}</h2>
									<RatedElement
										imdb={movie.rating.rate_imdb}
										kinopoisk={movie.rating.rate_kinopoisk}
										isSearch={false}
									/>
								</div>
								<ActorsList actors={movie.actors} />
							</div>
							<div className="moviepage__button__container">
								<div className="moviepage__button__container_plus">
									<MovieButton
										buttonName={ButtonTypes.favorites}
										id={movie.id}
									/>
									<MovieButton buttonName={ButtonTypes.willSee} id={movie.id} />
								</div>
								<RatingElement id={movie.id}/>
							</div>
						</div>
						<div className="description__container">
							<div>
								<FilmDescription description={movie.description} />
								{movie.trailer_link !== '-' ? (
									<TrailerButton imageUrl={movie.h_picture} />
								) : (
									''
								)}
							</div>
							<FilmAbout movie={movie} />
						</div>
						<div className="moviepage-cards__container">
							<SlickSliderMini title={`Подборки`} movies={films} />
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default MoviePage;
