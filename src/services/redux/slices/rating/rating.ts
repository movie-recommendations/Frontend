import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IRating } from 'src/types/Rating.types';
import { postRating } from './ratingApi';

export interface IRatingState {
	[x: string]: any;
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: unknown;
	movie_rating: IRating;
}

export const getMoviesRating = createAsyncThunk(
	'@@movie_rating/getMoviesRating',
async ({ id, rate, token, method }: {id: number; rate: any; token: any; method: string;}, { fulfillWithValue, rejectWithValue }) => {
	console.log(rate);
		try {

			const response = await postRating(id, rate, token, method);
			const responseData = { status: response.status, ok: response.ok };
			return fulfillWithValue(responseData);
			
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

const initialState: IRatingState = {
	status: 'idle',
	error: null,
	movie_rating: {
		id: 0,
		user: 0,
		movie: 0,
		rate: 0,
		is_viewed: false,
		must_see: false,
		is_favorite: false,
	},
}

export const ratingSlice = createSlice({
	name: '@@movie_rating',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getMoviesRating.fulfilled, (state, { meta, payload }) => {
				
			//state.status = 'success';
			//state.movie_rating.id = meta.arg.id;
			//state.movie_rating.id= action.meta.arg.id;
			//console.log(action)
			//console.log(action.meta.arg.rate)
			//state.movie_rating = state.movie_rating, action.payload;
			/*const { id, rate } = action.meta.arg;
			state.movie_rating = state.movie_rating.map((movie_rate) =>
			movie_rate.id === id ? { ...movie_rate, rate: rate } : movie_rate
			);*/
			//console.log(state.movie_rating)
		},
		);
	},
});

export const ratingReducer = ratingSlice.reducer;
export { postRating };
