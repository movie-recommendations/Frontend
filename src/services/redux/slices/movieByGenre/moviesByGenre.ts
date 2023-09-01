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
};

export const moviesByGenreSlice = createSlice({
	name: '@@moviesbygenre',
	initialState,
	reducers: {
		clearMovieByGenreData: () => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(getMoviesByGenreApi.fulfilled, (state, action) => {
			state.status = 'success';
			state.films = action.payload;
		});
	},
});

export const { clearMovieByGenreData } = moviesByGenreSlice.actions;

export const moviesbygenreReducer = moviesByGenreSlice.reducer;
