import { useAppDispatch, useAppSelector } from 'src/services/typeHooks';
import './ExtendedSearch.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectActor } from 'src/services/redux/slices/actors/actors';
import { selectGenres } from 'src/services/redux/slices/genres/genres';
import { selectDirector } from 'src/services/redux/slices/director/directors';
import { IActors } from 'src/types/Actors.types';
import { IDirectors } from 'src/types/Directors.types';
import { selectCountries } from 'src/services/redux/slices/countries/countries';
import { getMovieByAdvancedSearchApi } from 'src/services/redux/slices/movieByAdvancedSearch/movieByAdvancedSearch';
import { selectUser } from 'src/services/redux/slices/user/user';

const ExtendedSearch = ({
	isOpenExtended,
	isClose,
}: {
	isOpenExtended: boolean;
	isClose: () => void;
}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const actors = useAppSelector(selectActor);
	const genres = useAppSelector(selectGenres);
	const countries = useAppSelector(selectCountries);
	const directors = useAppSelector(selectDirector);
	const user = useAppSelector(selectUser);
	const films = useAppSelector(
		(state) => state.movieByAdvancedSearc.moviesAdvanced
	);
	const [inputValueActors, setInputValueActors] = useState('');
	const [inputValueDirectors, setInputValueDirectors] = useState('');
	const [filteredActors, setFilteredActors] = useState<IActors[]>([]);
	const [filteredDirectors, setFilteredDirectors] = useState<IDirectors[]>([]);
	const [selectedActorId, setSelectedActorId] = useState<any>('');
	const [selectedDirectorId, setSelectedDirectorId] = useState<any>('');
	const [selectedGenreSlug, setSelectedGenreSlug] = useState('');
	const [selectedCountrySlug, setSelectedCountrySlug] = useState('');

	const handleChangeActors = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setInputValueActors(value);

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
		setInputValueActors(actorName);
		setFilteredActors([]);
	};

	const handleChangeDirectors = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = event.target.value;
		setInputValueDirectors(value);

		if (value.trim() === '') {
			setFilteredDirectors([]);
			return;
		}

		const filtered = directors.filter((director) =>
			`${director.name} ${director.last_name}`
				.toLowerCase()
				.includes(value.toLowerCase())
		);
		setFilteredDirectors(filtered);
	};

	const handleDirectorClick = (directorName: string) => {
		setInputValueDirectors(directorName);
		setFilteredDirectors([]);
	};

	const resetState = () => {
		isClose();
		setSelectedActorId('');
		setSelectedDirectorId('');
		setSelectedGenreSlug('');
		setSelectedCountrySlug('');
	}

	const Click = async () => {
		dispatch(
		  getMovieByAdvancedSearchApi({
			data: {
			  actor: selectedActorId,
			  director: selectedDirectorId,
			  genre: selectedGenreSlug,
			  country: selectedCountrySlug,
			},
			token: user.token,
		  })
		);
		navigate('/search-result', { state: films });
		resetState();
	  };

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
				onChange={(e) => setSelectedGenreSlug(e.target.value)}
			>
				<option value="" disabled>
					Жанр
				</option>
				{genres.map((genre) => (
					<option key={genre.slug} value={genre.slug}>
						{genre.title}
					</option>
				))}
			</select>
			<select
				id="country"
				name="country"
				className="searchExtended__form"
				defaultValue={''}
				onChange={(e) => setSelectedCountrySlug(e.target.value)}
			>
				<option value="" disabled>
					Страна
				</option>
				{countries.map((country) => (
					<option key={country.slug} value={country.slug}>
						{country.title}
					</option>
				))}
			</select>
			<input
				className="searchExtended__form searchExtended__form_input"
				id="actorName"
				name="actorName"
				type="text"
				placeholder="Актер"
				onChange={handleChangeActors}
				// onBlur={() => setFilteredActors([])}
				onFocus={handleChangeActors}
				autoComplete="off"
				value={inputValueActors}
			/>
			{filteredActors.length > 0 && (
				<ul className="searchExtended__form-actors">
					{filteredActors.map((actor) => (
						<button
							className="searchExtended__form-actor"
							key={actor.id}
							onClick={() => {
								handleActorClick(`${actor.name} ${actor.last_name}`);
								setSelectedActorId(actor.id);
							}}
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
				onChange={handleChangeDirectors}
				// onBlur={() => setFilteredDirectors([])}
				onFocus={handleChangeDirectors}
				autoComplete="off"
				value={inputValueDirectors}
			/>
			{filteredDirectors.length > 0 && (
				<ul className="searchExtended__form-directors">
					{filteredDirectors.map((director) => (
						<button
							className="searchExtended__form-director"
							key={director.id}
							onClick={() => {
								handleDirectorClick(`${director.name} ${director.last_name}`);
								setSelectedDirectorId(director.id);
							}}
						>
							{director.name} {director.last_name}
						</button>
					))}
				</ul>
			)}
			{/* <div className="searchExtended__row">
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
			</div> */}
			<button className="searchExtended__submit" onClick={Click}>
				Найти
			</button>
		</section>
	);
};

export default ExtendedSearch;
