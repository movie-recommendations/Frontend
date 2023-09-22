import { useEffect, useState } from 'react';
import './MainPage.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { SlickSlider } from 'src/components/SlickSlider/SlickSlider';
import { SpecialForYou } from 'src/components/SpecialForYou/SpecialForYou';
import { SlickSliderDayMovies } from 'src/components/SlickSliderDayMovies/SlickSliderDayMovies';
import { SlickSliderGenres } from 'src/components/SlickSliderGenres/SlickSliderGenres';
import { SlickSliderSpecial } from 'src/components/SlickSliderSpecial/SlickSliderSpecial';
import { getNewMovieCardsApi } from 'src/services/redux/slices/newmoviecards/newmoviecards';
import { getMoviesApi } from 'src/services/redux/slices/movies/movies';
import { getCompilationsApi } from 'src/services/redux/slices/compilations/compilations';
import { Loader } from 'src/components/Loader/Loader';
import { SlickSliderMini } from 'src/components/SlickSliderMini/SlickSliderMini';
import { getGenres } from 'src/services/redux/slices/genres/genres';
import { selectUser } from 'src/services/redux/slices/user/user';
import {
	getFavoritesApi,
	getWatchListApi,
} from 'src/services/redux/slices/favorites/favorites';

import { getActorsApi } from 'src/services/redux/slices/actors/actors';
import { useNavigate } from 'react-router';
import { ButtonShowAll } from 'src/components/ButtonShowAll/ButtonShowAll';
import { getMoviesOfDayApi } from 'src/services/redux/slices/moviesoftheday/moviesoftheday';
import { getGenresIconsAPI } from 'src/services/redux/slices/genresIconsApi/genresIcons';
import { getCountriesApi } from 'src/services/redux/slices/countries/countries';
import { getDirectorsApi } from 'src/services/redux/slices/director/directors';
import { getRecomendedMoviesApi } from 'src/services/redux/slices/recomendations/recomendations';
import { getRatedMoviesApi } from 'src/services/redux/slices/rating/rating';

export default function MainPage() {
	const [isLoading, setIsLoading] = useState(true);
	const user = useAppSelector(selectUser);

	const dispatch = useAppDispatch();

	useEffect(() => {
		Promise.all([
			dispatch(getNewMovieCardsApi()),
			dispatch(getMoviesApi()),
			dispatch(getCompilationsApi()),
			dispatch(getGenres()),
			dispatch(getMoviesOfDayApi()),
			dispatch(getGenresIconsAPI()),
		])
			.then(() => {
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});
	}, []);

	useEffect(() => {
		if (user.token) {
			dispatch(getFavoritesApi(user.token));
			dispatch(getWatchListApi(user.token));
			dispatch(getRatedMoviesApi(user.token));
			dispatch(getRecomendedMoviesApi(user.token));
		}
		dispatch(getCountriesApi());
		dispatch(getActorsApi());
		dispatch(getDirectorsApi());
	}, []);

	const films = useAppSelector((state) => state.movies.movies);
	const newmovies = useAppSelector((state) => state.newmoviecards.movies);
	const recomendations = useAppSelector((state) => state.recomendations.movies);
	// const compilations = useAppSelector((state) => state.compilations.data);
	const redactionOne = useAppSelector((state) => state.compilations.data[0]);
	const redactionTwo = useAppSelector((state) => state.compilations.data[1]);
	const redactionThree = useAppSelector((state) => state.compilations.data[2]);
	const navigate = useNavigate();
	const handleAllButtonFilmsClick = (movies: any, title: string) => {
		localStorage.setItem('filmsBy', JSON.stringify({ movies }));
		localStorage.setItem('title', JSON.stringify(title));
		navigate('/selections');
	};
	const handleAllButtonClick = (movies: any) => {
		localStorage.setItem('filmsBy', JSON.stringify(movies));
		navigate('/selections');
	};
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<main className="main-page" id="main-page">
					<SlickSliderDayMovies />

					<div className="main-page_slick-slider">
						<SlickSliderMini title={`Новинки`} movies={newmovies} />
						<ButtonShowAll
							onClick={() => handleAllButtonFilmsClick(films, 'Новинки')}
						/>
					</div>
					<div className="main-page_slick-slider">
						{
							<div className="main-page_slick-slider_specialforyou">
								{user.token ? (
									<div className="main-page__relative">
										<SlickSliderSpecial
											title={`Специально для вас`}
											movies={films}
										/>
										<ButtonShowAll
											onClick={() =>
												handleAllButtonFilmsClick(
													recomendations,
													'Специально для вас'
												)
											}
										/>
									</div>
								) : (
									<SpecialForYou />
								)}
							</div>
						}
					</div>
					<div className="main-page_slick-slider">
						{redactionOne && (
							<>
								<SlickSlider
									title={redactionOne.title}
									movies={redactionOne.movies}
								/>
								<ButtonShowAll
									onClick={() => handleAllButtonClick(redactionOne)}
								/>
							</>
						)}
					</div>
					<div className="main-page_slick-slider">
						{redactionTwo && (
							<>
								<SlickSlider
									title={redactionTwo.title}
									movies={redactionTwo.movies}
								/>
								<ButtonShowAll
									onClick={() => handleAllButtonClick(redactionTwo)}
								/>
							</>
						)}
					</div>
					<div className="main-page_slick-slider">
						{redactionThree && (
							<>
								<SlickSlider
									title={redactionThree.title}
									movies={redactionThree.movies}
								/>
								<ButtonShowAll
									onClick={() => handleAllButtonClick(redactionThree)}
								/>
							</>
						)}
					</div>
					<div className="main-page_slick-slider">
						<SlickSliderGenres />
						<ButtonShowAll
							onClick={() => handleAllButtonFilmsClick(films, 'Новинки')}
						/>
					</div>
				</main>
			)}
		</>
	);
}
