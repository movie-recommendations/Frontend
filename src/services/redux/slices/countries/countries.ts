import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCountries } from './countriesAPI';
import { ICountriesState } from 'src/types/Countries.type';

export const getCountriesApi = createAsyncThunk(
	'@@countries/countries',
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchCountries();
			return fulfillWithValue(response);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

const initialState: ICountriesState = {
	status: 'idle',
	error: '',
	countries: [
		{
			id: 0,
			title: '',
			slug: '',
		},
	],
};

export const countriesSlice = createSlice({
	name: '@@countries',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCountriesApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.countries = action.payload;
			})
			.addCase(getCountriesApi.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getCountriesApi.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export const countriesReducer = countriesSlice.reducer;

export const selectCountries = (state: { countries: ICountriesState }) =>
	state.countries.countries;
