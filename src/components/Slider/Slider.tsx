import { FC, useEffect, useRef, useState } from 'react';
import SliderController from '../SliderController1/SliderController1';
import { SliderControllerTypes } from '../../types/SliderController.types';

import './Slider.css';
import { ISlider } from 'src/types/Slider.types';
import GenreCheckbox from '../GenreCheckbox/GenreCheckbox';

const Slider: FC<ISlider> = ({ contentType, content, onGenreSelection }) => {
	const [liIndex, setLiIndex] = useState<number>(0);
	const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
	const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

	const containerRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		setCanScrollLeft(liIndex <= 0);
		if (contentType === 'genresBlock') {
			setCanScrollRight(
				content.length - liIndex <= 9 && content.length - liIndex >= 0
			);
		}
	}, [liIndex]);

	function scrollList(direction: string) {
		const listNode = containerRef.current;

		if (listNode && direction === 'left') {
			setLiIndex(liIndex - 9);
			listNode.scrollBy({
				behavior: 'smooth',
				left: -570,
			});
		}
		if (listNode && direction === 'right') {
			setLiIndex(liIndex + 9);
			listNode.scrollBy({
				behavior: 'smooth',
				left: 570,
			});
		}
		return contentType === 'genresBlock' &&
			content.length - liIndex <= 9 &&
			content.length - liIndex >= 0
			? setCanScrollRight(true)
			: setCanScrollRight(false);
	}

	const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

	const handleCheckboxChange = (id: number, checked: boolean) => {
		const newSelectedGenres = checked
			? [...selectedGenres, id]
			: selectedGenres.filter((genreId) => genreId !== id);

		setSelectedGenres(newSelectedGenres);

		onGenreSelection(newSelectedGenres);
	};

	console.log(content);
	return (
		<div className="slider slider_type_block">
			<ul
				className="slider__items-list slider__items-list_type_block"
				ref={containerRef}
			>
				{content
					.map((genre) => (
						<li key={genre.id}>
							<GenreCheckbox
								text={genre.title}
								id={genre.id}
								onChange={handleCheckboxChange}
							/>
						</li>
					))
					.reverse()}
			</ul>
			<div className="slider__controllers">
				<SliderController
					direction={SliderControllerTypes.left}
					canScrollLeft={canScrollLeft}
					handleScroll={scrollList}
				/>
				<SliderController
					direction={SliderControllerTypes.right}
					canScrollRight={canScrollRight}
					handleScroll={scrollList}
				/>
			</div>
		</div>
	);
};

export default Slider;
