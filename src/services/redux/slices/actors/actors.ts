import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchActors } from './actorsAPI';
import { IActorsState } from 'src/types/Actors.types';

export const getActorsApi = createAsyncThunk(
	'@@actors/actors',
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchActors();
			return fulfillWithValue(response);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

const initialState: IActorsState = {
	status: 'idle',
	error: '',
	actors: [
		{
			id: 0,
			name: '',
			last_name: '',
		},
	],
};

export const actorsSlice = createSlice({
	name: '@@actors',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getActorsApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.actors = action.payload;
			})
			.addCase(getActorsApi.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getActorsApi.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export const actorsReducer = actorsSlice.reducer;

export const selectActor = (state: { actors: IActorsState }) =>
	state.actors.actors;
