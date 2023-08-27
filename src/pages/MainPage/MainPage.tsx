import { useEffect, useState } from 'react';
import './MainPage.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { SlickSlider } from 'src/components/SlickSlider/SlickSlider';
import { SpecialForYou } from 'src/components/SpecialForYou/SpecialForYou';
import { SlickSliderDayMovies } from 'src/components/SlickSliderDayMovies/SlickSliderDayMovies';
import { SlickSliderGenres } from 'src/components/SlickSliderGenres/SlickSliderGenres';
import { getNewMovieCardsApi } from 'src/services/redux/slices/newmoviecards/newmoviecards';
import { getMoviesApi } from 'src/services/redux/slices/movies/movies';
import { getCompilationsApi } from 'src/services/redux/slices/compilations/compilations';
import { Loader } from 'src/components/Loader/Loader';
import { SlickSliderMini } from 'src/components/SlickSliderMini/SlickSliderMini';
import { getGenres } from 'src/services/redux/slices/genres/genres';
import { selectUser } from 'src/services/redux/slices/user/user';
import { getFavoritesApi, getWatchListApi } from 'src/services/redux/slices/favorites/favorites';

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
		}
	}, []);

	const films = useAppSelector((state) => state.movies.movies);
	const newmovies = useAppSelector((state) => state.newmoviecards.movies);

	// const compilations = useAppSelector((state) => state.compilations.data);
	const redactionOne = useAppSelector((state) => state.compilations.data[0]);
	const redactionTwo = useAppSelector((state) => state.compilations.data[1]);
	const redactionThree = useAppSelector((state) => state.compilations.data[2]);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<main className="main-page" id="main-page">
					<SlickSliderDayMovies />
					<div className="main-page_slick-slider">
						<SlickSliderMini title={`Новинки`} movies={newmovies} />
					</div>
					<div className="main-page_slick-slider">
						<div className="main-page_slick-slider_specialforyou">
							{user.token ? (
								<SlickSliderMini title={`Специально для вас`} movies={films} />
							) : (
								<SpecialForYou />
							)}
						</div>
					</div>
					<div className="main-page_slick-slider">
						{redactionOne && (
							<SlickSlider
								title={redactionOne.title}
								movies={redactionOne.movies}
							/>
						)}
					</div>
					<div className="main-page_slick-slider">
						{redactionTwo && (
							<SlickSlider
								title={redactionTwo.title}
								movies={redactionTwo.movies}
							/>
						)}
					</div>
					<div className="main-page_slick-slider">
						{redactionThree && (
							<SlickSlider
								title={redactionThree.title}
								movies={redactionThree.movies}
							/>
						)}
					</div>
					<div className="main-page_slick-slider">
						<SlickSliderGenres />
					</div>
				</main>
			)}
		</>
	);
}
