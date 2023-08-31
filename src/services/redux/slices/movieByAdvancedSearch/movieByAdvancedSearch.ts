import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovieByAdvancedSearch } from './movieByAdvancedSearchApi';
import { IMovieAdvancedCardState } from 'src/types/MovieByAdvancedSearch.types';
import { IData } from 'src/types/MovieByAdvancedSearch.types';

export const getMovieByAdvancedSearchApi = createAsyncThunk(
	'@@movieByAdvancedSearch/getMovieByAdvancedSearch',
	async (
		arg: { data: IData; token: string },
		{ fulfillWithValue, rejectWithValue }
	) => {
		const { data, token } = arg;
		try {
			const response = await getMovieByAdvancedSearch(data, token);
			const json = await response
			return fulfillWithValue(json);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

const initialState: IMovieAdvancedCardState = {
	status: 'idle',
	error: '',
	movies: [{
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
	},]
};

export const movieByAdvancedSearcSlice = createSlice({
	name: '@@movieByAdvancedSearch',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getMovieByAdvancedSearchApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.movies = action.payload;
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

export const movieByAdvancedSearcReducer = movieByAdvancedSearcSlice.reducer;
