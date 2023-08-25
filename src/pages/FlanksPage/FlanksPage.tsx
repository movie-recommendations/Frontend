import './FlanksPage.css';
import React, { useEffect, useState, useCallback } from 'react';
import { IFlanks } from 'src/types/Flanks.types';
import { FC } from 'react';
import { getFilmsApi } from '../../services/redux/slices/films/films';
import { getSelectionsApi } from '../../services/redux/slices/selections/selections';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { FilmCard } from 'src/components/FilmCardWidth255/FilmCard';
import { SelectionCard } from 'src/components/SelectionCard/SelectionCard';
import { MoreButton } from 'src/components/MoreBtn/MoreButton';
import { IMovieCard } from 'src/types/MovieCard.types';
import { getCompilationsApi } from 'src/services/redux/slices/compilations/compilations';

const FlanksPage: FC<IFlanks> = ({ formName }) => {
	const dispatch = useAppDispatch();
	const favorites = useAppSelector((state) => state.newmoviecards.movies);
	const compilations = useAppSelector((state) => state.compilations.data);

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
			setToggleFavorites(favorites);
		} else if (formName === 'willSee') {
			setToggleFavorites(favorites);
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

	const handleResize = useCallback(() => {
		const windowWidth = window.innerWidth;
		setScreenSize(windowWidth);
	}, []);

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

	return (
		<section className="flank">
			<h1 className="flank_title">{title}</h1>
			<div className="flank_container">
				{formName === 'collections' ? (
					<SelectionCard compilations={compilations} />
				) : (
					toggleFavorites
						.slice(0, pageMore)
						.map((film) => <FilmCard film={film} />)
				)}
			</div>
			<div className="flank_btn">
				{isMoreButton ? <MoreButton onClick={handleMoreButtonClick} /> : null}
			</div>
		</section>
	);
};

export default FlanksPage;
