import { IMovieCard } from './MovieCard.types';
import { IRating } from './Moviebyid.types';

export interface ICompilations {
	id: number;
	title: string;
	v_picture?: string;
	h_picture?: string;
	rating: IRating;
	year: number;
	genres: string[];
    is_favorite?: boolean;
	is_need_see?: boolean;
}

export interface ICompilationsTwo {
	id: number,
    title: string,
    movies: IMovieCard[]
}

export interface ICompilationsState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	data: Array<ICompilationsTwo>;
}
