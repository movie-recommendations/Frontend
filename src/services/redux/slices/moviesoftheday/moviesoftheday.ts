import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMoviesOfDay } from './moviesofthedayAPI';
import { IMoviesOfDayState } from 'src/types/moviesoftheday.types';

export const getMoviesOfDayApi = createAsyncThunk(
	'@@moviedaycards/moviedaycards',
	async () => {
		return getMoviesOfDay();
	}
);

const initialState: IMoviesOfDayState = {
	status: 'idle',
	error: '',
	daymovies: [
		{
			id: 0,
			title: '',
			short_description: '',
			h_picture: '',
			rate_imdb: 0,
			rate_kinopoisk: 0,
			is_favorite: false,
		},
	],
};

export const moviedaycardsSlice = createSlice({
	name: '@@MovieDay',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getMoviesOfDayApi.fulfilled, (state, action) => {
			state.status = 'success';
			state.daymovies = action.payload;
		});
	},
});

export const moviedaycardsReducer = moviedaycardsSlice.reducer;
