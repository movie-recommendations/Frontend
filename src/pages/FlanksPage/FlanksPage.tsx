import './FlanksPage.css';
import { useEffect, useState, useCallback } from 'react';
import { IFlanks } from 'src/types/Flanks.types';
import { FC } from 'react';
import { getFilmsApi } from '../../services/redux/slices/films/films';
import { getSelectionsApi } from '../../services/redux/slices/selections/selections';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { SelectionCard } from 'src/components/SelectionCard/SelectionCard';
import { MoreButton } from 'src/components/MoreBtn/MoreButton';
import { IMovieCard } from 'src/types/MovieCard.types';
import { getCompilationsApi } from 'src/services/redux/slices/compilations/compilations';
import { FilmCard } from 'src/components/FilmCardWidth255/FilmCard';
import {
	getFavoritesApi,
	getWatchListApi,
	// resetFavorites,
} from 'src/services/redux/slices/favorites/favorites';
import { selectUser } from 'src/services/redux/slices/user/user';
import { getRatedMoviesApi } from 'src/services/redux/slices/rating/rating';
import { SlickSliderMini } from 'src/components/SlickSliderMini/SlickSliderMini';
import { useNavigate } from 'react-router';
import { ButtonShowAll } from 'src/components/ButtonShowAll/ButtonShowAll';

const FlanksPage: FC<IFlanks> = ({ formName }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const favorites = useAppSelector((state) => state.favoritemovies.favorites);
	const rated = useAppSelector((state) => state.rating.ratedMovies);
	const watchList = useAppSelector((state) => state.favoritemovies.watchlist);
	const compilations = useAppSelector((state) => state.compilations.data);
	const films = useAppSelector((state) => state.movies.movies);
	const recomendations = useAppSelector((state) => state.recomendations.movies);
	const user = useAppSelector(selectUser);

	const [toggleFavorites, setToggleFavorites] = useState<IMovieCard[]>([]);
	const [isMoreButton, setIsMoreButton] = useState(false);
	const [screenSize, setScreenSize] = useState<number>(0);
	const [pageMore, setPageMore] = useState(screenSize);

	const title =
		formName === 'ratedFilms'
			? 'Оцененное'
			: formName === 'willSee'
				? 'Буду смотреть'
				: formName === 'favorites'
					? 'Избранное'
					: 'Все подборки';

	// Отвечает за определение какой масив показывать
	useEffect(() => {
		if (formName === 'ratedFilms') {
			setToggleFavorites(rated);
		} else if (formName === 'willSee') {
			setToggleFavorites(watchList);
		} else if (formName === 'favorites') {
			setToggleFavorites(favorites);
		} else {
			setToggleFavorites([]);
		}
	}, [favorites, formName]);

	useEffect(() => {
		dispatch(getFilmsApi());
		dispatch(getSelectionsApi());
		dispatch(getCompilationsApi());
	}, []);

	useEffect(() => {
		if (user.token) {
			dispatch(getFavoritesApi(user.token));
			dispatch(getWatchListApi(user.token));
			dispatch(getRatedMoviesApi(user.token));
		}
	}, []);

	const handleResize = useCallback(() => {
		const windowWidth = window.innerWidth;
		setScreenSize(windowWidth);
	}, []);

	// useEffect(() => {
	// 	return () => {
	// 		dispatch(resetFavorites());
	// 	};
	// }, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		if (screenSize >= 1280) {
			const page = 12;
			setPageMore(page);
		} else if (screenSize <= 1280 && screenSize > 800) {
			const page = 9;
			setPageMore(page);
		} else if (screenSize < 800) {
			const page = 8;
			setPageMore(page);
		}
	}, [screenSize]);

	useEffect(() => {
		if (toggleFavorites.length > pageMore) {
			setIsMoreButton(true);
		} else {
			setIsMoreButton(false);
		}
	}, [toggleFavorites, pageMore]);

	const handleMoreButtonClick = () => {
		setPageMore((prev) => prev + pageMore);
	};

	const handleAllButtonFilmsClick = (movies: any, titlev: string) => {
		localStorage.setItem('filmsBy', JSON.stringify({ movies }));
		localStorage.setItem('title', JSON.stringify(title));
		navigate('/selections');
	};

	return (
		<section className="flank">
			<h1 className="flank_title">{title}</h1>
			{formName === 'collections' ? (
				<div className="flank_container">
					<SelectionCard compilations={compilations} />
				</div>
			) : (
				toggleFavorites.length === 0 ? (
					<>
						<div className='flank__text__container'>
							<p className='flank__text'>Вы еще не добавили фильмы в этот раздел.<br />Чтобы добавить фильм, нажмите на кнопку </p>
							{/* <img className='flank__image' src={button} alt='button' /> */}
						</div>
						<div className="main-page_slick-slider">
							<div className="main-page_slick-slider_specialforyou">
								<div className="main-page__relative">
									<SlickSliderMini title={`Специально для вас`} movies={films} />
									<ButtonShowAll
										onClick={() =>
											handleAllButtonFilmsClick(recomendations, 'Специально для вас')
										}
									/>
								</div>
							</div>
						</div>
					</>
				) : (
					<div className="flank_container">
						{toggleFavorites
							.slice(0, pageMore)
							.map((film) => <FilmCard key={film.id} film={film} />)
						}
					</div>
				))}
			<div className="flank_btn">
				{isMoreButton ? <MoreButton onClick={handleMoreButtonClick} /> : null}
			</div>
		</section>
	);
};

export default FlanksPage;
