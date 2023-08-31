import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMoviebyid, getMoviebyidToken } from './moviebyidApi';
import { IMoviebyidState } from 'src/types/Moviebyid.types';

export const getMoviebyidTokenApi = createAsyncThunk(
	'@@moviebyid/getMoviebyidToken',
	async (
		arg: { filmId: number; token: string },
		{ fulfillWithValue, rejectWithValue }
	) => {
		const { filmId, token } = arg;
		try {
			const response = await getMoviebyidToken(filmId, token);
			const json = await response;
			return fulfillWithValue(json);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const getMoviebyidApi = createAsyncThunk(
	'@@moviebyid/getMoviebyid',
	async (filmId: number, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await getMoviebyid(filmId);
			const json = await response;
			return fulfillWithValue(json);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

const initialState: IMoviebyidState = {
	status: 'idle',
	error: '',
	movie: {
		id: 0,
		title: '',
		original_title: '',
		v_picture: '',
		h_picture: '',
		premiere_date: '',
		rating: {
			rate_imdb: 0,
			rate_kinopoisk: 0,
		},
		duration_minutes: 0,
		age_limit: 0,
		genres: [
			{
				id: 0,
				slug: '',
				title: '',
			},
		],
		actors: [''],
		directors: [''],
		countries: [
			{
				id: 0,
				slug: '',
				title: '',
			},
		],
		categories: {
			id: 0,
			slug: '',
			title: '',
		},
		description: '',
		is_favorite: false,
		is_need_see: false,
		trailer_link: '',
		user_rate: 0,
	},
};

export const moviebyidSlice = createSlice({
	name: '@@moviebyid',
	initialState,
	reducers: {
		resetMoviebyid: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getMoviebyidApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.movie = action.payload;
			})
			.addCase(getMoviebyidApi.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getMoviebyidTokenApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.movie = action.payload;
			})
			.addCase(getMoviebyidTokenApi.pending, (state) => {
				state.status = 'loading';
			});
		// .addMatcher(
		// 	(action) => action.type.endsWith('/pending'),
		// 	(state) => {
		// 		state.status = 'loading';
		// 		state.error = '';
		// 	}
		// )
		// .addMatcher(
		// 	(action) => action.type.endsWith('/rejected'),
		// 	(state, action) => {
		// 		state.status = 'failed';
		// 		state.error = action.payload.statusText;
		// 	}
		// );
	},
});

export const { resetMoviebyid } = moviebyidSlice.actions;

export const moviebyidReducer = moviebyidSlice.reducer;
