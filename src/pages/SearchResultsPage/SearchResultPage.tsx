import './SearchResultPage.css';
import { useCallback } from 'react';
import { SeachResult } from 'src/components/SeachResult/SeachResult';
import { MoreButton } from 'src/components/MoreBtn/MoreButton';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IMovieAdvancedCard } from 'src/types/MovieByAdvancedSearch.types';
import { clearState } from 'src/services/redux/slices/movieByAdvancedSearch/movieByAdvancedSearch';
import { Loader } from 'src/components/Loader/Loader';
import { useAppSelector } from 'src/services/typeHooks';

export const SearchResultPage = () => {
	const location = useLocation();
	const props: IMovieAdvancedCard[] = location.state;
	const [values] = useState('');
	const [isFilteredFilms, setIsFilteredFilms] = useState(false);
	const [isMoreButton, setIsMoreButton] = useState(false);
	const [screenSize, setScreenSize] = useState<number>(0);
	const [pageMore, setPageMore] = useState(screenSize);
	const loading = useAppSelector((state) => state.movieByAdvancedSearc.status)
	// const loading = props.status

	const filteredFilms = props;
	useEffect(() => {
		return () => {
			clearState()
		}
	})
	useEffect(() => {
		if (filteredFilms?.length === 0) {
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
		if (props?.length > pageMore) {
			setIsMoreButton(true);
		} else {
			setIsMoreButton(false);
		}
	}, [props, pageMore]);

	const handleMoreButtonClick = () => {
		setPageMore((prev) => prev + pageMore);
	};

	return (
		<>{loading === 'loading' ? (<Loader />) : (
			<section className="search-result">
				<h1 className="search-result_title">Результаты поиска</h1>
				{/* {
				props ? (
					<p className="search-result_subtitle">По запросу: {props} </p>
				) : (null)
			} */}
				<div className="search-page_container">
					{!isFilteredFilms ? (
						filteredFilms?.slice(0, pageMore)
							.map((film) => <SeachResult film={film} key={film.id} />)
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
		)}
		</>
	);
};
