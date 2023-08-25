export interface IMoviesOfDay {
	id: number;
	title: string;
	short_description: string;
	h_picture?: string;
	rating: IRating;
	is_favorite: boolean;
}

export interface IMoviesOfDayState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	daymovies: Array<IMoviesOfDay>;
}

interface IRating {
	rate_imdb: number;
	rate_kinopoisk: number;
}
