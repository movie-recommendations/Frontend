import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IRatingState } from 'src/types/Rating.types';
import { fetchSetRating, fetchUpdateRating, getRatedMovies } from './ratingApi';

export const getRatedMoviesApi = createAsyncThunk(
	'@@rate/getRated',
	async (token: string, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await getRatedMovies(token);
			const json = await response.json();
			return fulfillWithValue(json);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const setRatingApi = createAsyncThunk(
	'@@rate/setRate',
	async (
		arg: { id: number; rate: object; token: string },
		{ fulfillWithValue, rejectWithValue }
	) => {
		const { id, rate, token } = arg;
		try {
			const response = await fetchSetRating(id, rate, token);
			const responseData = { status: response.status, ok: response.ok };
			return fulfillWithValue(responseData);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const updateRatingApi = createAsyncThunk(
	'@@rate/updateRate',
	async (
		arg: { id: number; rate: object; token: string },
		{ fulfillWithValue, rejectWithValue }
	) => {
		const { id, rate, token } = arg;
		try {
			const response = await fetchUpdateRating(id, rate, token);
			const responseData = { status: response.status, ok: response.ok };
			return fulfillWithValue(responseData);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

const initialState: IRatingState = {
	status: 'idle',
	error: '',
	movie_rating: {
		id: 0,
	},
	ratedMovies: [],
};

export const ratingSlice = createSlice({
	name: '@@rate',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getRatedMoviesApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.ratedMovies = action.payload;
			})
			.addCase(setRatingApi.fulfilled, (state) => {
				state.status = 'success';
			})
			.addCase(updateRatingApi.fulfilled, (state) => {
				state.status = 'success';
			});
	},
});

export const ratingReducer = ratingSlice.reducer;
// export { postRating };
