import './SlickSlider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FilmCard } from '../FilmCardWidth255/FilmCard';
import { FC, MouseEvent } from 'react';
import { ICompilationsTwo } from 'src/types/Compilations.types';
import { useNavigate } from 'react-router';
import { IMovieCard } from 'src/types/MovieCard.types';
import BackButton from '../BackButton/BackButton';
import { MoreButton } from '../MoreBtn/MoreButton';
import { useResize } from '../../hooks/useResize';

export const SlickSlider: FC<ICompilationsTwo> = ({ title, movies }) => {
	const { width, isBreakpoint } = useResize();
	const moviesQty = !isBreakpoint ? 3 : 4;
	const slidesToShow = movies.length < moviesQty ? movies.length : moviesQty;
	const slidesToShow2 = ((window.innerWidth < 1280) ? 3 : slidesToShow)
	const slidesToScroll = slidesToShow;

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: slidesToShow2,
		slidesToScroll: slidesToScroll,
		arrows: true,
	};

	return (
		<div className="slick-slider_container">
			<h1 className="slick-slider_title">{title} </h1>
			<Slider {...settings} className="slick-slider">
				{movies.map((item) => (
					<FilmCard key={item.id} film={item} />
				))}
			</Slider>
		</div>
	);
};
