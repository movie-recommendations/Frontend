import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IRatingState } from 'src/types/Rating.types';
import { getRating } from './ratingApi';

export const getMoviesRating = createAsyncThunk(
	'@@favorites/favorites',
	async () => {
		return getRating();
	}
);

const initialState: IRatingState = {
	status: 'idle',
	error: '',
	movie_rating: {
		id: 0,
		user: 0,
		movie: 0,
		rate: 0,
		is_viewed: false,
		must_see: false,
		is_favorite: false,
	},
};

export const ratingSlice = createSlice({
	name: '@@favorites',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getMoviesRating.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getMoviesRating.fulfilled, (state, action) => {
				state.status = 'success';
				state.movie_rating = action.payload;
			})
			.addCase(getMoviesRating.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export const ratingReducer = ratingSlice.reducer;
