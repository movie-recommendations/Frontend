import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getGenresIcons } from './genresIconsApi';
import { IGenresIconsState } from 'src/types/GenresIcons.types';

export const getGenresIconsAPI = createAsyncThunk(
	'@@genresiconscards/genresiconscards',
	async () => {
		return getGenresIcons();
	}
);

const initialState: IGenresIconsState = {
	status: 'idle',
	error: '',
	genresicons: [
		{
			id: 0,
			title: '',
			slug: '',
			picture: '',
		},
	],
};

export const genresiconscardsSlice = createSlice({
	name: '@@GenresIcon',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getGenresIconsAPI.fulfilled, (state, action) => {
			state.status = 'success';
			state.genresicons = action.payload;
		});
	},
});

export const genresiconscardsReducer = genresiconscardsSlice.reducer;

export const genreTitle = createAsyncThunk('@@genre/title', async (title) => {
	return title;
});
