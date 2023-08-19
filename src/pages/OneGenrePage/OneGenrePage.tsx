import './OneGenrePage.css';
import { FC } from 'react';
import { useState } from 'react';
import { useAppSelector } from '../../services/typeHooks';
import { useNavigate } from 'react-router-dom';
import { FilmCardLarge} from 'src/components/FilmCardLarge/FilmCardLarge';
import { FilmCardSmall} from 'src/components/FilmCardWidth180/FilmCardSmall';
import { FilmCard} from 'src/components/FilmCardWidth255/FilmCard';
import { MoreButton } from 'src/components/MoreBtn/MoreButton';
import { IMovieCard } from 'src/types/MovieCard.types';
import  BackButton  from 'src/components/BackButton/BackButton';

const OneGenrePage: FC = () => {
	const filmsBygenre = useAppSelector((state) => state.moviesbygenre.films);
	const page = useAppSelector((state) => state.windowResize.page);
	const [isMoreButton, setIsMoreButton] = useState(false);
	const [pageMore, setPageMore] = useState(page);
	const handleMoreButtonClick = () => {
		setPageMore((prev) => prev + page);
	};

	const navigate = useNavigate();

    const handButtonBackClick = () => {
		navigate('/');
	};
	
	const genre = localStorage.getItem('genre');
	
	
	return (
		<section className="flank">
			<BackButton  type={'button'} buttonText={'Назад'} handleButtonClick={handButtonBackClick}
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
