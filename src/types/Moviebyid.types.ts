export interface IMoviebyid {
	id: number;
	title: string;
	original_title: string;
	v_picture: string;
	h_picture: string;
	premiere_date: string;
	rating: IRating;
	duration_minutes: number;
	age_limit: number;
	genres: IGenres[];
	actors: string[];
	directors: string[];
	countries: ICountries[];
	categories: ICategories;
	description: string;
	is_favorite: boolean;
	is_need_see?: boolean;
	trailer_link: string;
	user_rate: number;
}

export interface IGenres {
	id: number;
	slug: string;
	title: string;
}

interface ICountries {
	id: number;
	slug: string;
	title: string;
}

interface ICategories {
	id: number;
	slug: string;
	title: string;
}

export interface IRating {
	rate_imdb: number;
	rate_kinopoisk: number;
}

export interface IMoviebyidState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	movie: IMoviebyid;
}

export interface IFilmabout {
	movie: IMoviebyid;
}

export interface IDescription {
	description: string;
}
