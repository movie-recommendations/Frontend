import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWatch, deleteFromWatch, addToWatch } from './watchApi';
import { IFavoritesState } from 'src/types/Favorites.types';

export const getWatchApi = createAsyncThunk(
    '@@watch/watch',
    async (_, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await getWatch();
            const json = await response.json();
            return fulfillWithValue(json);
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const addToWatchApi = createAsyncThunk(
    '@@watch/addWatch',
    async (filmId: number, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await addToWatch(filmId);
            // const json = await response.json();
            return fulfillWithValue(response);
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const deleteFromWatchApi = createAsyncThunk(
    '@@watch/deleteWatch',
    async (filmId: number, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await deleteFromWatch(filmId);
            // const json = await response.json();
            return fulfillWithValue(response);
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

const initialState: IFavoritesState = {
    status: 'idle',
    error: '',
    favorites: [],
};

export const watchSlice = createSlice({
    name: '@@watch',
    initialState,
    reducers: {
        addWatch: (state, action) => {
            state.favorites = [...state.favorites, action.payload];
        },
        deleteWatch: (state, action) => {
            state.favorites.filter((item) => item !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWatchApi.fulfilled, (state, action) => {
                state.status = 'success';
                state.favorites = action.payload;
            })
            .addCase(addToWatchApi.fulfilled, (state) => {
                state.status = 'success';
            })
            .addCase(deleteFromWatchApi.fulfilled, (state) => {
                state.status = 'success';
            })
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

export const { addWatch, deleteWatch } = watchSlice.actions;

export const watchReducer = watchSlice.reducer;
