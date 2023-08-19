import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFavorites, deleteFromFavorites, addToFavorites } from './favoritesApi';
import { IFavoritesState } from 'src/types/Favorites.types';

export const getFavoritesApi = createAsyncThunk(
    '@@favorite/favorite',
    async (_, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await getFavorites();
            const json = await response.json();
            return fulfillWithValue(json);
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const addToFavoritesApi = createAsyncThunk(
    '@@favorite/addFavorite',
    async (filmId: number, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await addToFavorites(filmId);
            // const json = await response.json();
            return fulfillWithValue(response);
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const deleteFromFavoritesApi = createAsyncThunk(
    '@@favorite/deleteFavorite',
    async (filmId: number, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await deleteFromFavorites(filmId);
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

export const favoriteSlice = createSlice({
    name: '@@favorite',
    initialState,
    reducers: {
        addFavorites: (state, action) => {
            state.favorites = [...state.favorites, action.payload];
        },
        deleteFavorites: (state, action) => {
            state.favorites.filter((item) => item !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFavoritesApi.fulfilled, (state, action) => {
                state.status = 'success';
                state.favorites = action.payload;
            })
            .addCase(addToFavoritesApi.fulfilled, (state) => {
                state.status = 'success';
            })
            .addCase(deleteFromFavoritesApi.fulfilled, (state) => {
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

export const { addFavorites, deleteFavorites } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
