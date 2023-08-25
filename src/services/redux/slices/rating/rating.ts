import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IRating, IRatingState } from 'src/types/Rating.types';
// import { postRating } from './ratingApi';

export const getMoviesRating = createAsyncThunk(
	'@@movie_rating/postRating',
	async ({ id, rate }: { id: any; rate: any }) => {
		return { id, rate };
	}
);

/*async ({id,rate}: {id: any, rate: any}, { fulfillWithValue, rejectWithValue }) => {
		try {
			
			const response = await postRating(id,rate);
			
			//const json = await response.json();
			return fulfillWithValue(response);
			
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);*/

const initialState: IRatingState = {
	status: 'idle',
	error: '',
	movie_rating: [],
};

export const ratingSlice = createSlice({
	name: '@@movie_rating',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getMoviesRating.fulfilled, (state, action) => {
			console.log(1);
			state.status = 'success';
			//state.movie_rating = [...state.movie_rating, action.payload];
			//const { id, rate } = action.payload;
			//state.movie_rating = state.movie_rating.map((movie_rate) =>
			//movie_rate.id === id ? { ...movie_rate, rate: rate } : movie_rate
			//);
		});
	},
});

export const ratingReducer = ratingSlice.reducer;
