import './SearchResultPage.css';
import React, { useCallback } from 'react';
import { useAppSelector } from 'src/services/typeHooks';
import { SeachResult } from 'src/components/SeachResult/SeachResult';
import { MoreButton } from 'src/components/MoreBtn/MoreButton';
import { useState, useEffect } from 'react';
import { IMovieCard } from 'src/types/MovieCard.types';
import { useLocation } from 'react-router-dom';

export const SearchResultPage = () => {
	const [values] = useState('');
	const films = useAppSelector((state) => state.movies.movies);
	const [isFilteredFilms, setIsFilteredFilms] = useState(false);
	const [isMoreButton, setIsMoreButton] = useState(false);
	const [screenSize, setScreenSize] = useState<number>(0);
	const [pageMore, setPageMore] = useState(screenSize);

	const location = useLocation();

	const searchtext = decodeURI(location.search.slice(6));

	function filterFilms() {
		return films.filter((film: IMovieCard) => {
			const filmFind = film.title.toLowerCase();
			const userFilm = searchtext.toLowerCase();
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
		if (films.length > pageMore) {
			setIsMoreButton(true);
		} else {
			setIsMoreButton(false);
		}
	}, [films, pageMore]);

	const handleMoreButtonClick = () => {
		setPageMore((prev) => prev + pageMore);
	};

	return (
		<section className="search-result">
			<h1 className="search-result_title">Результаты поиска</h1>
			<p className="search-result_subtitle">По запросу: {searchtext} </p>
			<div className="search-page_container">
				{!isFilteredFilms ? (
					filteredFilms
						.slice(0, pageMore)
						.map((film) => <SeachResult film={film} />)
				) : (
					<p className="searchGeneral__film-none">
						По вашему запросу ничего не найдено
					</p>
				)}
			</div>
			<div className="flank_btn">
				{isMoreButton ? <MoreButton onClick={handleMoreButtonClick} /> : null}
			</div>
		</section>
	);
};
