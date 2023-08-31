import './Search.css';
import { useAppSelector } from '../../services/typeHooks';
// import { IFilms } from 'src/types/Film.types';
import { RatedElement } from '../RatedElement/RatedElement';
import { useState, useEffect } from 'react';
import { IMovieCard } from 'src/types/MovieCard.types';
import { useNavigate } from 'react-router-dom';
import {
	getMoviebyidApi,
	getMoviebyidTokenApi,
} from 'src/services/redux/slices/moviebyid/moviebyid';
import { useAppDispatch } from '../../services/typeHooks';
import { selectUser } from 'src/services/redux/slices/user/user';
import { getMovieBySearchApi } from 'src/services/redux/slices/movieByAdvancedSearch/movieByAdvancedSearch';

const Search = ({
	isOpenSearch,
	values,
	isClose,
}: {
	isOpenSearch: boolean;
	values: string;
	isClose: () => void;
}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const user = useAppSelector(selectUser);
	const films = useAppSelector(
		(state) => state.movieByAdvancedSearc.moviesSearch
	);
	const [isFilteredFilms, setIsFilteredFilms] = useState(false);

	useEffect(() => {
		dispatch(getMovieBySearchApi({ values, token: user.token }));
	}, [values]);

	const filteredFilms = films;

	useEffect(() => {
		if (filteredFilms?.length === 0) {
			setIsFilteredFilms(true);
		} else {
			setIsFilteredFilms(false);
		}
	}, [values]);

	const handleImgClick = (filmId: number, token: string) => {
		if (user.token) {
			dispatch(getMoviebyidTokenApi({ filmId: filmId, token: token }));
		} else {
			dispatch(getMoviebyidApi(filmId));
		}
		navigate('/movie-page');
		isClose();
		window.scrollTo(0, 0);
	};

	return (
		<section
			className={`searchGeneral ${isOpenSearch && 'searchGeneral_open'}`}
		>
			<div className="searchGeneral__films" id="searchGeneral__films">
				{!isFilteredFilms ? (
					filteredFilms?.slice(0, 5).map((film: IMovieCard) => (
						<a
							key={film.id}
							onClick={() => handleImgClick(film.id, user.token)}
							className="searchGeneral__film"
						>
							<img
								className="searchGeneral__film-poster"
								src={film.v_picture}
							></img>
							<article className="searchGeneral__film-desc">
								<p className="searchGeneral__film-name">{film.title}</p>
								<div className="searchGeneral__film-info">
									<div className="searchGeneral__film-rating">
										<RatedElement
											imdb={film.rating.rate_imdb}
											kinopoisk={film.rating.rate_kinopoisk}
											isSearch={true}
										/>
									</div>
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
