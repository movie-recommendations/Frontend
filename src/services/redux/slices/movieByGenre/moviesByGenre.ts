import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { getMoviesByGenre } from './moviesByGenreApi';
import { IFilmsbyGenreState } from 'src/types/FilmsByGenre.types';

export const getMoviesByGenreApi = createAsyncThunk(
	'@@moviesbygenre/moviesbygenre',
	async ({ genres }: { genres: string }) => {
		console.log(1);
		return getMoviesByGenre(genres);
	}
);

export const onegenre = createAsyncThunk(
	'@@onegenre/onegenre',
	async ({ genres }: { genres: string }) => {
		console.log(genres);
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
		builder
			.addCase(getMoviesByGenreApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.films = action.payload;
			})
			.addMatcher(
				(action) => action.type.endsWith('/pending'),
				(state) => {
					state.status = 'loading';
					state.error = '';
				}
			)
			.addMatcher(
				(action) => action.type.endsWith('/rejected'),
				(state, action) => {
					state.status = 'failed';
					state.error = action.payload.statusText;
				}
			);
	},
});

export const { clearMovieByGenreData } = moviesByGenreSlice.actions;

export const moviesbygenreReducer = moviesByGenreSlice.reducer;
