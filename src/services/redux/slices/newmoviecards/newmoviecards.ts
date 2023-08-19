import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getNewMovieCards } from './newmoviecardsApi';
import { IMovieCardState } from 'src/types/MovieCard.types';

export const getNewMovieCardsApi = createAsyncThunk(
	'@@newmoviecards/newmoviecards',
	async () => {
		return getNewMovieCards();
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

export const newmoviecardsSlice = createSlice({
	name: '@@newmoviecards',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getNewMovieCardsApi.fulfilled, (state, action) => {
			state.status = 'success';
			state.movies = action.payload;
		});
	},
});

export const newmoviecardsReducer = newmoviecardsSlice.reducer;
