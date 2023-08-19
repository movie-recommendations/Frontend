import './Search.css';
import { useAppSelector } from '../../services/typeHooks';
// import { IFilms } from 'src/types/Film.types';
import { RatedElement } from '../RatedElement/RatedElement';
import { useState, useEffect } from 'react';
import { IMovieCard } from 'src/types/MovieCard.types';
import { useNavigate } from 'react-router-dom';
import { getMoviebyidApi } from 'src/services/redux/slices/moviebyid/moviebyid';
import { useAppDispatch } from '../../services/typeHooks';

const Search = ({
	isOpenSearch,
	values,
}: {
	isOpenSearch: boolean;
	values: string;
}) => {
	const films = useAppSelector((state) => state.movies.movies);
	const [isFilteredFilms, setIsFilteredFilms] = useState(false);

	function filterFilms() {
		return films.filter((film: IMovieCard) => {
			const filmFind = film.title.toLowerCase();
			const userFilm = values.toLowerCase();
			return filmFind.includes(userFilm);
		});
	}
	const filteredFilms = filterFilms();

	useEffect(() => {
		if (filteredFilms.length === 0) {
			setIsFilteredFilms(true);
		} else {
			setIsFilteredFilms(false);
		}
	}, [values]);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleImgClick = (filmId: number) => {
		dispatch(getMoviebyidApi(filmId));
		navigate('/movie-page');
		window.scrollTo(0, 0);
	};


	return (
		<section
			className={`searchGeneral ${isOpenSearch && 'searchGeneral_open'}`}
		>
			<div className="searchGeneral__films" id="searchGeneral__films">
				{!isFilteredFilms ? (
					filteredFilms.slice(0, 5).map((film: IMovieCard) => (
						<a
							onClick={() => handleImgClick(film.id)}
							className="searchGeneral__film"
						>
							<img
								className="searchGeneral__film-poster"
								src={film.v_picture}
							></img>
							<article className="searchGeneral__film-desc">
								<p className="searchGeneral__film-name">{film.title}</p>
								<div className="searchGeneral__film-info">
									<p className="searchGeneral__film-rating">
										<RatedElement
											imdb={film.rating.rate_imdb}
											kinopoisk={film.rating.rate_kinopoisk}
											isSearch={true}
										/>
									</p>
									<p className="searchGeneral__film-genres">
										{film.genres.join(', ')}
									</p>
									<p className="searchGeneral__film-year"> • {film.year}</p>
								</div>
							</article>
						</a>
					))
				) : (
					<p className="searchGeneral__film-none">
						По вашему запросу ничего не найдено
					</p>
				)}
			</div>
		</section>
	);
};

export default Search;
