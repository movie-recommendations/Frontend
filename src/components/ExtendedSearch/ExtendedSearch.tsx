import './ExtendedSearch.css';
// import { useAppSelector } from '../../services/typeHooks';
// import { IFilms } from 'src/types/Film.types';
// import { RatedElement } from '../RatedElement/RatedElement';
// import { useState, useEffect } from 'react';

const ExtendedSearch = ({ isOpenExtended }: { isOpenExtended: boolean }) => {
	return (
		<section
			className={`searchExtended ${isOpenExtended && 'searchExtended_open'}`}
		>
			<p className="searchExtended__title">Расширенный поиск</p>
			<select id="genre" name="genre" className="searchExtended__form">
				<option
					value=""
					disabled
					selected
					className="searchExtended__form-select"
				>
					Жанр
				</option>
				<option className="searchExtended__form-option">Комедии</option>
				<option className="searchExtended__form-option">Ужасы</option>
			</select>
			<select id="country" name="country" className="searchExtended__form">
				<option value="" disabled selected>
					Страна
				</option>
				<option className="searchExtended__form-option">Россия</option>
				<option className="searchExtended__form-option">США</option>
			</select>
			<select id="actor" name="actor" className="searchExtended__form">
				<option value="" disabled selected>
					Актер
				</option>
				<option>Бильбо Бэггинс</option>
				<option>США</option>
			</select>
			<select id="director" name="director" className="searchExtended__form">
				<option value="" disabled selected>
					Режиссер
				</option>
				<option>Россия</option>
				<option>США</option>
			</select>
			<div className="searchExtended__row">
				<p className="searchExtended__row-title">Год</p>
				<select id="director" name="director" className="searchExtended__form">
					<option value="" disabled selected>
						c --
					</option>
					<option>1990</option>
					<option>1991</option>
				</select>
				<select id="director" name="director" className="searchExtended__form">
					<option value="" disabled selected>
						по --
					</option>
					<option>2022</option>
					<option>2023</option>
				</select>
			</div>
			<div className="searchExtended__row">
				<p className="searchExtended__row-title">Рейтинг IMDB</p>
				<select id="director" name="director" className="searchExtended__form">
					<option value="" disabled selected>
						c --
					</option>
					<option>7.0</option>
					<option>8.0</option>
				</select>
				<select id="director" name="director" className="searchExtended__form">
					<option value="" disabled selected>
						по --
					</option>
					<option>9.0</option>
					<option>10.0</option>
				</select>
			</div>
			<button className="searchExtended__submit">Найти</button>
		</section>
	);
};

export default ExtendedSearch;
