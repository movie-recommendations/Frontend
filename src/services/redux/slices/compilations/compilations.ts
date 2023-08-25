import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCompilations } from './compilationsApi';
import { ICompilationsState } from 'src/types/Compilations.types';

export const getCompilationsApi = createAsyncThunk(
	'@@compilations/compilations',
	async () => {
		return getCompilations();
	}
);

const initialState: ICompilationsState = {
	data: [
		{
			id: 0,
			title: '',
			description: '',
			movies: [
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
		},
	],
};

export const compilationsSlice = createSlice({
	name: '@@compilations',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCompilationsApi.fulfilled, (state, action) => {
			state.data = action.payload;
		});
	},
});

export const compilationsReducer = compilationsSlice.reducer;
