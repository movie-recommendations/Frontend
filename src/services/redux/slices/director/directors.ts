import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchActors } from './directorsAPI';
import { IDirectorsState } from 'src/types/Directors.types';

export const getDirectorsApi = createAsyncThunk(
	'@@directors/directors',
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchActors();
			return fulfillWithValue(response);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

const initialState: IDirectorsState = {
	status: 'idle',
	error: '',
	directors: [
		{
			id: 0,
			name: '',
			last_name: '',
		},
	],
};

export const directorsSlice = createSlice({
	name: '@@directors',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getDirectorsApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.directors = action.payload;
			})
			.addCase(getDirectorsApi.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getDirectorsApi.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export const directorsReducer = directorsSlice.reducer;

export const selectDirector = (state: { directors: IDirectorsState }) =>
	state.directors.directors;
