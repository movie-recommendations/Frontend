import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSelections } from './selectionsAPI';
import { ISelectionState } from 'src/types/Film.types';

export const getSelectionsApi = createAsyncThunk(
	'@@selections/films',
	async () => {
		return getSelections();
	}
);

const initialState: ISelectionState = {
	status: 'idle',
	error: '',
	selections: [
		{
			id: 0,
			title: '',
			description: '',
			movie: [
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
		},
	],
};

export const selectionSlice = createSlice({
	name: '@@selections',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getSelectionsApi.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getSelectionsApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.selections = action.payload;
			})
			.addCase(getSelectionsApi.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export const selectionsReducer = selectionSlice.reducer;
