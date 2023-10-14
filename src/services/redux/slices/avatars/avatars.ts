import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAvatars } from './avatarsAPI';
import { IAvatarsState } from 'src/types/Avatars.types';

export const getAvatarsApi = createAsyncThunk(
	'@@avatars/getAvatars',
	async (token: string, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchAvatars(token);
			return fulfillWithValue(response);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

const initialState: IAvatarsState = {
	status: 'idle',
	error: '',
	images: [
		{
			id: 0,
			avatar: '',
		},
	],
};

export const avatarsSlice = createSlice({
	name: '@@avatars',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAvatarsApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.images = action.payload;
			})
			.addCase(getAvatarsApi.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getAvatarsApi.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export const avatarsReducer = avatarsSlice.reducer;
