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

export const SlickSlider: FC<ICompilationsTwo> = ({ title, movies }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		responsive: [
			{
				breakpoint: 1320,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 460,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
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
