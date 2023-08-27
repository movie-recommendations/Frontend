import './OneGenrePage.css';
import { FC } from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useAppSelector } from '../../services/typeHooks';
import { useNavigate } from 'react-router-dom';
import { FilmCardSmall } from 'src/components/FilmCardWidth180/FilmCardSmall';
import { MoreButton } from 'src/components/MoreBtn/MoreButton';
import { IMovieCard } from 'src/types/MovieCard.types';
import BackButton from 'src/components/BackButton/BackButton';

const OneGenrePage: FC = () => {
	const filmsBygenre = useAppSelector((state) => state.moviesbygenre.films);
	const [isMoreButton, setIsMoreButton] = useState(false);
	const [screenSize, setScreenSize] = useState<number>(0);
	const [pageMore, setPageMore] = useState(screenSize);

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
		if (filmsBygenre.length > pageMore) {
			setIsMoreButton(true);
		} else {
			setIsMoreButton(false);
		}
	}, [filmsBygenre, pageMore]);

	const handleMoreButtonClick = () => {
		setPageMore((prev) => prev + pageMore);
	};

	const navigate = useNavigate();

	const handButtonBackClick = () => {
		navigate('/');
	};

	const genre = localStorage.getItem('genre');

	return (
		<section className="flank">
			<BackButton
				type={'button'}
				buttonText={'Назад'}
				handleButtonClick={handButtonBackClick}
			/>
			<h1 className="flank_title">
				Жанр{' '}
				{filmsBygenre[0].genres.find(
					(element: string) => element === `${genre}`
				)}
			</h1>
			<div className="flank_container">
				{filmsBygenre.slice(0, pageMore).map((film: IMovieCard) => (
					<FilmCardSmall film={film} />
				))}
			</div>
			<div className="flank_btn">
				{isMoreButton ? <MoreButton onClick={handleMoreButtonClick} /> : null}
			</div>
		</section>
	);
};

export default OneGenrePage;
