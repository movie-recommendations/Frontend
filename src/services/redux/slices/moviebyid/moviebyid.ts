import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMoviebyid } from './moviebyidApi';
import { IMoviebyidState } from 'src/types/Moviebyid.types';

export const getMoviebyidApi = createAsyncThunk(
	'@@movie/movie',
	async (filmId: number) => {
		return getMoviebyid(filmId);
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
	name: '@@movie',
	initialState,
	reducers: {
		resetMoviebyid: () => initialState
	},
	extraReducers: (builder) => {
		builder
			.addCase(getMoviebyidApi.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getMoviebyidApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.movie = action.payload;
			});
	},
});

export const { resetMoviebyid } = moviebyidSlice.actions;

export const moviebyidReducer = moviebyidSlice.reducer;
