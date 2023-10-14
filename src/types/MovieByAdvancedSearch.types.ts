import { IRating } from './Moviebyid.types';

interface ICountries {
	id: number;
	slug: string;
	title: string;
}

export interface IMovieAdvancedCard {
	id: number;
	title: string;
	v_picture?: string;
	h_picture?: string;
	rating: IRating;
	year: number;
	genres: string[];
	actors: string[];
	directors: string[];
	countries: ICountries[];
	is_favorite: boolean;
	is_need_see: boolean;
}

export interface IMovieAdvancedCardState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	moviesAdvanced: IMovieAdvancedCard[];
	moviesSearch: IMovieAdvancedCard[];
}

export interface IData {
	actor: any;
	director: any;
	genre: string;
	country: string;
	yearFrom?: any;
	yearTo?: any;
	ratingFrom?: any;
	ratingTo?: any;
}
