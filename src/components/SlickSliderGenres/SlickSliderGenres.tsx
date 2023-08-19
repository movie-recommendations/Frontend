import './SlickSliderGenres.css';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FilmCard } from '../FilmCardWidth255/FilmCard';
import { IFilms } from 'src/types/Film.types';
import { FC } from 'react';
import { ISlider } from 'src/types/Rating.types';
import CheckboxMain from '../CheckboxMain/CheckboxMain';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { MoreButton } from '../MoreBtn/MoreButton';

export const SlickSliderGenres = ({ content }: { content: string[] }) => {
	const films = useAppSelector((state) => state.newmoviecards.movies);
	const page = useAppSelector((state) => state.windowResize.page);
	const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
	const [pageMore, setPageMore] = useState(page);
	const [isMoreButton, setIsMoreButton] = useState(false);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 4,
		arrows: true,
	};

	const handleCheckboxChange = (text: string) => {
		if (selectedGenres.includes(text)) {
			setSelectedGenres(selectedGenres.filter((item) => item !== text));
		} else {
			setSelectedGenres([...selectedGenres, text]);
		}
	};

	const filteredFilms =
		selectedGenres.length > 0
			? films.filter((film) => {
					return selectedGenres.some((genre) => film.genres.includes(genre));
			  })
			: films;

	useEffect(() => {
		if (filteredFilms.length > page) {
			setIsMoreButton(true);
		} else {
			setIsMoreButton(false);
		}
	}, [filteredFilms, page]);

	const handleMoreButtonClick = () => {
		setPageMore((prev) => prev + page);
	};

	return (
		<div>
			<div className="slick-slider-genres_container">
				<h1 className="slick-slider_title">Фильмы по жанрам</h1>
				<Slider {...settings} className="slick-slider">
					{content.map((item) => (
						<li key={content.indexOf(item)} className="main-page_color-white">
							<CheckboxMain text={item} onChange={handleCheckboxChange} />
						</li>
					))}
				</Slider>
			</div>
			<div className="flank_container">
				{filteredFilms.slice(0, pageMore).map((film) => (
					<FilmCard key={film.id} film={film} />
				))}
			</div>
			<div className="flank_btn">
				{isMoreButton ? <MoreButton onClick={handleMoreButtonClick} /> : null}
			</div>
		</div>
	);
};
