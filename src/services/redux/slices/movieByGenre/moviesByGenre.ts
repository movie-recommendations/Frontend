import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMoviesByGenre } from './moviesByGenreApi';
import { IFilmsbyGenreState } from 'src/types/FilmsByGenre.types';





export const getMoviesByGenreApi = createAsyncThunk('@@moviesbygenre/moviesbygenre', 
async ({ genres }: { genres: string; }) => {
return getMoviesByGenre(genres);
});


const initialState: IFilmsbyGenreState = {
	status: 'idle',
	error: '',
	films: [
		{
			id: '',
			title: '',
			rating: {
				kinopoisk: 0,
				imdb: 0,
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
				kinopoisk: 0,
				imdb: 0,
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
				kinopoisk: 0,
				imdb: 0,
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
				kinopoisk: 0,
				imdb: 0,
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
	filmsbygenre: []
};

export const moviesByGenreSlice = createSlice({
	name: '@@moviesbygenre',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getMoviesByGenreApi.fulfilled, (state, action) => {
			state.films = action.payload;
			console.log(state.films)
		})
	},
});

export const moviesbygenreReducer = moviesByGenreSlice.reducer;
