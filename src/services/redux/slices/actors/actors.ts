import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchActors } from './actorsAPI';
import { IActorsState } from 'src/types/Actors.types';

export const getActorsApi = createAsyncThunk(
	'@@actors/actors',
	async () => {
		return fetchActors();
	}
);

const initialState: IActorsState = {
	status: 'idle',
	error: '',
	actors: [
		{
			id: 0,
            name:'',
            last_name:''
		},
	],
};

export const actorsSlice = createSlice({
	name: '@@actors',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getActorsApi.fulfilled, (state, action) => {
			state.status = 'success';
			state.actors = action.payload
		});
	},
});

export const actorsReducer = actorsSlice.reducer;
