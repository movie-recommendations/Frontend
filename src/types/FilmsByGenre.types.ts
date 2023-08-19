export interface IFilmsbyGenre {
	id: string;
	title: string;
	rating: IRating;
	shortDescription: string;
	v_picture: string;
	movieCardUrl: string;
	index: number;
	year: number;
	genres: string[];
	country: string[];
	director: IDirector[];
	actor: IActor[];
	is_favorite: boolean;
	is_viewed?: boolean;
	must_see?: boolean;
}

interface IDirector {
	first_name: string;
	last_name: string;
}

export interface IActor {
	first_name: string;
	last_name: string;
}

export interface ISelect {
	id: number;
	title: string;
	description: string;
	movie: IFilmsbyGenre[];
}

interface IRating {
	rate_kinopoisk: number;
	rate_imdb: number;
}

export interface IFilmsbyGenreState {
	films: any;
	genres: any;
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	filmsbygenre: Array<IFilmsbyGenre>;
	favoriteFilms: Array<IFilmsbyGenre>;
	mustSeeFilms: Array<IFilmsbyGenre>;
	viewedFilms: Array<IFilmsbyGenre>;
}

export interface ISelectionState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	selections: ISelect[];
}
