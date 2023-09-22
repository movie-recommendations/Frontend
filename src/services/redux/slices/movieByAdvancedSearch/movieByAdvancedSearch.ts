import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
	getMovieByAdvancedSearch,
	getMovieBySearch,
} from './movieByAdvancedSearchApi';
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
			const json = await response;
			return fulfillWithValue(json);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const getMovieBySearchApi = createAsyncThunk(
	'@@movieByAdvancedSearch/getMovieBySearch',
	async (
		arg: { values: any; token: string },
		{ fulfillWithValue, rejectWithValue }
	) => {
		const { values, token } = arg;
		try {
			const response = await getMovieBySearch(values, token);
			const json = await response;
			return fulfillWithValue(json);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

const initialState: IMovieAdvancedCardState = {
	status: 'idle',
	error: '',
	moviesAdvanced: [
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
	moviesSearch: [
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

export const movieByAdvancedSearcSlice = createSlice({
	name: '@@movieByAdvancedSearch',
	initialState,
	reducers: {
		clearState: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getMovieByAdvancedSearchApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.moviesAdvanced = action.payload;
			})
			.addCase(getMovieBySearchApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.moviesSearch = action.payload;
			})
			.addMatcher(
				(action) => action.type.endsWith('/pending'),
				(state) => {
					state.status = 'loading';
					state.error = '';
				}
			);
		// .addMatcher(
		// 	(action) => action.type.endsWith('/rejected'),
		// 	(state, action) => {
		// 		state.status = 'failed';
		// 		state.error = action.payload.statusText;
		// 	}
		// );
	},
});

export const { clearState } = movieByAdvancedSearcSlice.actions;

export const movieByAdvancedSearcReducer = movieByAdvancedSearcSlice.reducer;
