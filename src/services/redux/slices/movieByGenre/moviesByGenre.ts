import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { getMoviesByGenre } from './moviesByGenreApi';
import { IFilmsbyGenreState } from 'src/types/FilmsByGenre.types';

export const getMoviesByGenreApi = createAsyncThunk(
	'@@moviesbygenre/moviesbygenre',
	async ({ genres }: { genres: string }) => {
		return getMoviesByGenre(genres);
	}
);

export const onegenre = createAsyncThunk(
	'@@onegenre/onegenre',
	async ({ genres }: { genres: string }) => {
		return genres;
	}
);

export const clearMovieData = createAction('@@moviesbygenre/clearMovieData');

const initialState: IFilmsbyGenreState = {
	status: 'idle',
	error: '',
	films: [
		{
			id: '',
			title: '',
			rating: {
				rate_kinopoisk: 0,
				rate_imdb: 0,
			},
			shortDescription: '',
			v_picture: '',
			movieCardUrl: '',
			index: 0,
			year: 0,
			genres: [''],
			country: [''],
			director: [
				{
					first_name: '',
					last_name: '',
				},
			],
			actor: [
				{
					first_name: '',
					last_name: '',
				},
			],
			is_favorite: false,
			must_see: false,
			is_viewed: false,
		},
	],
	favoriteFilms: [
		{
			id: '',
			title: '',
			rating: {
				rate_kinopoisk: 0,
				rate_imdb: 0,
			},
			shortDescription: '',
			v_picture: '',
			movieCardUrl: '',
			index: 0,
			year: 0,
			genres: [''],
			country: [''],
			director: [
				{
					first_name: '',
					last_name: '',
				},
			],
			actor: [
				{
					first_name: '',
					last_name: '',
				},
			],
			is_favorite: false,
			must_see: false,
			is_viewed: false,
		},
	],
	mustSeeFilms: [
		{
			id: '',
			title: '',
			rating: {
				rate_kinopoisk: 0,
				rate_imdb: 0,
			},
			shortDescription: '',
			v_picture: '',
			movieCardUrl: '',
			index: 0,
			year: 0,
			genres: [''],
			country: [''],
			director: [
				{
					first_name: '',
					last_name: '',
				},
			],
			actor: [
				{
					first_name: '',
					last_name: '',
				},
			],
			is_favorite: false,
			must_see: false,
			is_viewed: false,
		},
	],
	viewedFilms: [
		{
			id: '',
			title: '',
			rating: {
				rate_kinopoisk: 0,
				rate_imdb: 0,
			},
			shortDescription: '',
			v_picture: '',
			movieCardUrl: '',
			index: 0,
			year: 0,
			genres: [''],
			country: [''],
			director: [
				{
					first_name: '',
					last_name: '',
				},
			],
			actor: [
				{
					first_name: '',
					last_name: '',
				},
			],
			is_favorite: false,
			must_see: false,
			is_viewed: false,
		},
	],
	genres: undefined,
	filmsbygenre: [],
};

export const moviesByGenreSlice = createSlice({
	name: '@@moviesbygenre',
	initialState,
	reducers: {
		clearMovieData: () => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(getMoviesByGenreApi.fulfilled, (state, action) => {
			state.films = action.payload;
		});
	},
});

export const moviesbygenreReducer = moviesByGenreSlice.reducer;
