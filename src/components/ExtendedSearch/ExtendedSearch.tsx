import { useAppDispatch, useAppSelector } from 'src/services/typeHooks';
import './ExtendedSearch.css';
import { useEffect, useState } from 'react';
import {
	getActorsApi,
	selectActor,
} from 'src/services/redux/slices/actors/actors';
import { IActors } from 'src/types/Actors.types';

const ExtendedSearch = ({ isOpenExtended }: { isOpenExtended: boolean }) => {
	const dispatch = useAppDispatch();
	const actors = useAppSelector(selectActor);
	const [inputValue, setInputValue] = useState('');
	const [filteredActors, setFilteredActors] = useState<IActors[]>([]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setInputValue(value);

		if (value.trim() === '') {
			setFilteredActors([]);
			return;
		}

		const filtered = actors.filter((actor) =>
			`${actor.name} ${actor.last_name}`
				.toLowerCase()
				.includes(value.toLowerCase())
		);
		setFilteredActors(filtered);
	};

	const handleActorClick = (actorName: string) => {
		setInputValue(actorName);
		setFilteredActors([]);
	};

	useEffect(() => {
		dispatch(getActorsApi());
	}, []);

	return (
		<section
			className={`searchExtended ${isOpenExtended && 'searchExtended_open'}`}
		>
			<p className="searchExtended__title">Расширенный поиск</p>
			<select
				id="genre"
				name="genre"
				className="searchExtended__form"
				defaultValue={''}
			>
				<option value="" disabled>
					Жанр
				</option>
				<option className="searchExtended__form-option">Вестерн</option>
				<option className="searchExtended__form-option">История</option>
				<option className="searchExtended__form-option">Аниме</option>
				<option className="searchExtended__form-option">Биография</option>
				<option className="searchExtended__form-option">Криминал</option>
				<option className="searchExtended__form-option">Детектив</option>
				<option className="searchExtended__form-option">Триллер</option>
				<option className="searchExtended__form-option">Ужасы</option>
				<option className="searchExtended__form-option">Драма</option>
				<option className="searchExtended__form-option">Семейный</option>
				<option className="searchExtended__form-option">Приключения</option>
				<option className="searchExtended__form-option">Боевик</option>
				<option className="searchExtended__form-option">Фэнтези</option>
				<option className="searchExtended__form-option">Фантастика</option>
				<option className="searchExtended__form-option">Мультфильм</option>
				<option className="searchExtended__form-option">Мелодрама</option>
				<option className="searchExtended__form-option">Комедия</option>
			</select>
			<select
				id="country"
				name="country"
				className="searchExtended__form"
				defaultValue={''}
			>
				<option value="" disabled>
					Страна
				</option>
				<option className="searchExtended__form-option">Россия</option>
				<option className="searchExtended__form-option">США</option>
				<option className="searchExtended__form-option">Китай</option>
				<option className="searchExtended__form-option">Франция</option>
				<option className="searchExtended__form-option">Великобритания</option>
				<option className="searchExtended__form-option">Индия</option>
				<option className="searchExtended__form-option">Германия</option>
				<option className="searchExtended__form-option">Австралия</option>
				<option className="searchExtended__form-option">Южная Корея</option>
				<option className="searchExtended__form-option">Япония</option>
			</select>
			{/* <select id="actor" name="actor" className="searchExtended__form">
				<option value="" disabled selected>
					Актер
				</option>
				<option>Бильбо Бэггинс</option>
				<option>США</option>
			</select> */}

			<input
				className="searchExtended__form searchExtended__form_input"
				id="actorName"
				name="actorName"
				type="text"
				placeholder="Актер"
				onChange={handleChange}
				onBlur={() => setFilteredActors([])}
				onFocus={handleChange}
				autoComplete="off"
				value={inputValue}
			/>
			{filteredActors.length > 0 && (
				<ul className="searchExtended__form-actors">
					{filteredActors.map((actor) => (
						<button
							className="searchExtended__form-actor"
							key={actor.id}
							onClick={() =>
								handleActorClick(`${actor.name} ${actor.last_name}`)
							}
						>
							{actor.name} {actor.last_name}
						</button>
					))}
				</ul>
			)}
			<input
				className="searchExtended__form searchExtended__form_input"
				id="name"
				name="directorName"
				type="text"
				placeholder="Режиссер"
				// onChange={handleChange}
				// onBlur={setSearchClose}
				autoComplete="off"
			/>
			<div className="searchExtended__row">
				<p className="searchExtended__row-title">Год</p>
				<select id="yearFrom" name="yearFrom" className="searchExtended__form">
					<option value="" disabled>
						c --
					</option>
					<option>1950</option>
					<option>1955</option>
					<option>1960</option>
					<option>1965</option>
					<option>1970</option>
					<option>1975</option>
					<option>1980</option>
					<option>1985</option>
					<option>1990</option>
					<option>1995</option>
					<option>2000</option>
					<option>2005</option>
					<option>2010</option>
					<option>2015</option>
					<option>2020</option>
					<option>2023</option>
				</select>
				<select id="yearTo" name="yearTo" className="searchExtended__form">
					<option value="" disabled>
						по --
					</option>
					<option>1950</option>
					<option>1955</option>
					<option>1960</option>
					<option>1965</option>
					<option>1970</option>
					<option>1975</option>
					<option>1980</option>
					<option>1985</option>
					<option>1990</option>
					<option>1995</option>
					<option>2000</option>
					<option>2005</option>
					<option>2010</option>
					<option>2015</option>
					<option>2020</option>
					<option>2023</option>
				</select>
			</div>
			<div className="searchExtended__row">
				<p className="searchExtended__row-title">Рейтинг IMDB</p>
				<select
					id="ratingFrom"
					name="ratingFrom"
					className="searchExtended__form"
				>
					<option value="" disabled>
						c --
					</option>
					<option>0.0</option>
					<option>1.0</option>
					<option>2.0</option>
					<option>3.0</option>
					<option>4.0</option>
					<option>5.0</option>
					<option>6.0</option>
					<option>7.0</option>
					<option>8.0</option>
					<option>9.0</option>
				</select>
				<select id="ratingTo" name="ratingTo" className="searchExtended__form">
					<option value="" disabled>
						по --
					</option>
					<option>1.0</option>
					<option>2.0</option>
					<option>3.0</option>
					<option>4.0</option>
					<option>5.0</option>
					<option>6.0</option>
					<option>7.0</option>
					<option>8.0</option>
					<option>9.0</option>
					<option>10.0</option>
				</select>
			</div>
			<button className="searchExtended__submit">Найти</button>
		</section>
	);
};

export default ExtendedSearch;
