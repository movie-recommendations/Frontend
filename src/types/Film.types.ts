export interface IFilms {
	id: number;
	title: string;
	rating: IRating;
	shortDescription: string;
	imageUrl: string;
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
	movie: IFilms[];
}

interface IRating {
	kinopoisk: number;
	imdb: number;
}

export interface IFilmsState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	films: Array<IFilms>;
	favoriteFilms: Array<IFilms>;
	mustSeeFilms: Array<IFilms>;
	viewedFilms: Array<IFilms>;
}

export interface ISelectionState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	selections: ISelect[];
}
