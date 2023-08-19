import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovies } from './moviesApi';
import { IMovieCardState } from 'src/types/MovieCard.types';

export const getMoviesApi = createAsyncThunk(
	'@@movies/movies',
	async () => {
		return getMovies();
	}
);

const initialState: IMovieCardState = {
	status: 'idle',
	error: '',
	movies: [
		{
			id: 0,
			title: '',
			v_picture: '',
			h_picture: '',
			rating: {
				rate_imdb: 0,
				rate_kinopoisk: 0,
			},
			year: 0,
			genres: [''],
			is_favorite: false,
			is_need_see: false,
		},
	],
};

export const moviesSlice = createSlice({
	name: '@@movies',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getMoviesApi.fulfilled, (state, action) => {
			state.status = 'success';
			state.movies = action.payload;
		});
	},
});

export const moviesReducer = moviesSlice.reducer;
