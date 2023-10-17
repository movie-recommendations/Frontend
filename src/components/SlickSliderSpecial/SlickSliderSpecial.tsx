import '../SlickSlider/SlickSlider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FC } from 'react';
import { ICompilationsTwo } from 'src/types/Compilations.types';
import { FilmCardSpecial } from '../../components/FilmCardSpecial/FilmCardSpecial';

export const SlickSliderSpecial: FC<ICompilationsTwo> = ({
	title,
	movies,
	id,
}) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
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
			<h1 className="slick-slider_title">{title}</h1>
			<Slider {...settings} className="slick-slider">
				{movies.map((item) => (
					<FilmCardSpecial key={item.id} film={item} />
				))}
			</Slider>
		</div>
	);
};
