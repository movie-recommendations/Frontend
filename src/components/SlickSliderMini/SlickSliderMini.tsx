import '../SlickSlider/SlickSlider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FC } from 'react';
import { ICompilationsTwo } from 'src/types/Compilations.types';
import { FilmCardSmall } from '../FilmCardWidth180/FilmCardSmall';

export const SlickSliderMini: FC<ICompilationsTwo> = ({ title, movies }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 4,
		arrows: true,
	};

	return (
		<div className="slick-slider_container">
			<h1 className="slick-slider_title">{title}</h1>
			<Slider {...settings} className="slick-slider">
				{movies.map((item) => (
					<FilmCardSmall key={item.id} film={item} />
				))}
			</Slider>
		</div>
	);
};
