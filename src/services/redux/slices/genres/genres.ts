import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchGenres } from './genresAPI';
import { IGenre } from 'src/types/Genre.types';

export const getGenres = createAsyncThunk(
	'@@genres/getGenres',
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchGenres();
			return fulfillWithValue(response);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export interface IGenresState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: '';
	genres: IGenre[];
}

const initialState: IGenresState = {
	status: 'idle',
	error: '',
	genres: [],
};

const genresSlice = createSlice({
	name: '@@genres',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(
				getGenres.fulfilled,
				(state, action: PayloadAction<IGenre[]>) => {
					state.status = 'success';
					state.genres = action.payload;
				}
			)
			.addMatcher(
				(action) => action.type.endsWith('/pending'),
				(state) => {
					state.status = 'loading';
					state.error = '';
				}
			)
			.addMatcher(
				(action) => action.type.endsWith('/rejected'),
				(state, action) => {
					state.status = 'failed';
					state.error = action.payload.statusText;
				}
			);
	},
});

export const genresReducer = genresSlice.reducer;

export const selectGenres = (state: { genres: IGenresState }) =>
	state.genres.genres;

	
