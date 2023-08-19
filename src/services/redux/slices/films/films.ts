import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFilms } from './filmsAPI';
import { IFilmsState } from 'src/types/Film.types';

export const getFilmsApi = createAsyncThunk('@@films/films', async () => {
	return getFilms();
});

export const updateFavorite = createAsyncThunk(
	'@@films/updateFavorite',
	async ({ id, favorite }: { id: number; favorite: boolean }) => {
		return { id, favorite };
	}
);

export const updateWatch = createAsyncThunk(
	'@@films/updateWatch',
	async ({ id, watch }: { id: number; watch: boolean }) => {
		return { id, watch };
	}
);

const initialState: IFilmsState = {
	status: 'idle',
	error: '',
	films: [
		{
			id: 0,
			title: '',
			rating: {
				kinopoisk: 0,
				imdb: 0,
			},
			shortDescription: '',
			imageUrl: '',
			movieCardUrl: '',
			index: 0,
			year: 0,
			genres: [''],
			country: [''],
			director: [
				{
					first_name: '',
					last_name: '',
				},
			],
			actor: [
				{
					first_name: '',
					last_name: '',
				},
			],
			is_favorite: false,
			must_see: false,
			is_viewed: false,
		},
	],
	favoriteFilms: [
		{
			id: 0,
			title: '',
			rating: {
				kinopoisk: 0,
				imdb: 0,
			},
			shortDescription: '',
			imageUrl: '',
			movieCardUrl: '',
			index: 0,
			year: 0,
			genres: [''],
			country: [''],
			director: [
				{
					first_name: '',
					last_name: '',
				},
			],
			actor: [
				{
					first_name: '',
					last_name: '',
				},
			],
			is_favorite: false,
			must_see: false,
			is_viewed: false,
		},
	],
	mustSeeFilms: [
		{
			id: 0,
			title: '',
			rating: {
				kinopoisk: 0,
				imdb: 0,
			},
			shortDescription: '',
			imageUrl: '',
			movieCardUrl: '',
			index: 0,
			year: 0,
			genres: [''],
			country: [''],
			director: [
				{
					first_name: '',
					last_name: '',
				},
			],
			actor: [
				{
					first_name: '',
					last_name: '',
				},
			],
			is_favorite: false,
			must_see: false,
			is_viewed: false,
		},
	],
	viewedFilms: [
		{
			id: 0,
			title: '',
			rating: {
				kinopoisk: 0,
				imdb: 0,
			},
			shortDescription: '',
			imageUrl: '',
			movieCardUrl: '',
			index: 0,
			year: 0,
			genres: [''],
			country: [''],
			director: [
				{
					first_name: '',
					last_name: '',
				},
			],
			actor: [
				{
					first_name: '',
					last_name: '',
				},
			],
			is_favorite: false,
			must_see: false,
			is_viewed: false,
		},
	],
};

export const filmSlice = createSlice({
	name: '@@films',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getFilmsApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.films = action.payload;
				state.favoriteFilms = action.payload.filter((film) => film.is_favorite);
				state.mustSeeFilms = action.payload.filter((film) => film.must_see);
				state.viewedFilms = action.payload.filter((film) => film.is_viewed);
			})
			.addCase(updateFavorite.fulfilled, (state, action) => {
				state.status = 'success';
				const { id, favorite } = action.payload;
				state.films = state.films.map((film) =>
					film.id === id ? { ...film, is_favorite: favorite } : film
				);
				state.favoriteFilms = state.films.filter((film) => film.is_favorite);
				state.mustSeeFilms = state.films.filter((film) => film.must_see);
				state.viewedFilms = state.films.filter((film) => film.is_viewed);
			})
			.addCase(updateWatch.fulfilled, (state, action) => {
				state.status = 'success';
				const { id, watch } = action.payload;
				state.films = state.films.map((film) =>
					film.id === id ? { ...film, must_see: watch } : film
				);
				state.favoriteFilms = state.films.filter((film) => film.is_favorite);
				state.mustSeeFilms = state.films.filter((film) => film.must_see);
				state.viewedFilms = state.films.filter((film) => film.is_viewed);
			});
	},
});

export const filmsReducer = filmSlice.reducer;

// export const selectFilms = (state: { films: IFilmsState }) => state.films.films;
