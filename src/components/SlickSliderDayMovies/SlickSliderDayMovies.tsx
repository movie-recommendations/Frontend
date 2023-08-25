import './SlickSliderDayMovies.css';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { IMoviesOfDay } from 'src/types/moviesoftheday.types';
import { getMoviesOfDayApi } from 'src/services/redux/slices/moviesoftheday/moviesoftheday';
import FirstScreenCompilationAPI from '../FirstScreenCompilation/FirstScreenCompilationAPI';

export const SlickSliderDayMovies = ({}) => {
	const dispatch = useAppDispatch();
	const moviesday = useAppSelector((state) => state.daymoviescards.daymovies);
	const [data, setData] = useState<IMoviesOfDay[]>(moviesday);

	// const favorites = useAppSelector((state) => state.films.favoriteFilms);
	// const willSee = useAppSelector((state) => state.films.mustSeeFilms);
	// const ratedFilms = useAppSelector((state) => state.films.viewedFilms);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		dotsClass: 'slick-numbers',
	};

	useEffect(() => {
		dispatch(getMoviesOfDayApi());
	}, []);

	useEffect(() => {
		setData(moviesday);
	}, []);

	return (
		<div className="main-page_slick-slider">
			<Slider {...settings} className="slick-slider-main">
				{data.map((item) => (
					<FirstScreenCompilationAPI key={item.id} film={item} />
				))}
			</Slider>
		</div>
	);
};
