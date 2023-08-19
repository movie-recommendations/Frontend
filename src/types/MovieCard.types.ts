import { IRating } from './Moviebyid.types';

export interface IMovieCard {
	id: number;
	title: string;
	v_picture?: string;
	h_picture?: string;
	rating: IRating;
	year: number;
	genres: string[];
	is_favorite: boolean;
	is_need_see: boolean;
}

export interface IMovieCardState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	movies: Array<IMovieCard>;
}
