import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IMovieCardState } from 'src/types/MovieCard.types';
import { getRecomendedMovies } from './recomendationsAPI';

export const getRecomendedMoviesApi = createAsyncThunk('@@recomendations/getRecomendedMovies', async (token: string) => {
	return getRecomendedMovies(token);
});

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

export const recomendationsSlice = createSlice({
	name: '@@recomendations',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getRecomendedMoviesApi.fulfilled, (state, action) => {
			state.status = 'success';
			state.movies = action.payload;
		});
	},
});

export const recomendationsReducer = recomendationsSlice.reducer;
