import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import {
	persistReducer,
	persistStore,
	PERSIST,
	REHYDRATE,
	FLUSH,
	PAUSE,
	PURGE,
	REGISTER,
} from 'redux-persist';

import { userReducer } from './slices/user/user';
import { filmsReducer } from './slices/films/films';
import { selectionsReducer } from './slices/selections/selections';
import { ratingReducer } from './slices/rating/rating';
import { moviebyidReducer } from './slices/moviebyid/moviebyid';
import { newmoviecardsReducer } from './slices/newmoviecards/newmoviecards';
import { moviedaycardsReducer } from './slices/moviesoftheday/moviesoftheday';
import { genresiconscardsReducer } from './slices/genresIconsApi/genresIcons';
import { genresReducer } from './slices/genres/genres';
import { moviesReducer } from './slices/movies/movies';
import { favoriteReducer } from './slices/favorites/favorites';
import { compilationsReducer } from './slices/compilations/compilations';
import { moviesbygenreReducer} from './slices/movieByGenre/moviesByGenre';
import { actorsReducer} from './slices/actors/actors';

const rootReducer = combineReducers({
	user: userReducer,
	films: filmsReducer,
	movie: moviebyidReducer,
	movies: moviesReducer,
	favoritemovies: favoriteReducer,
	compilations: compilationsReducer,
	newmoviecards: newmoviecardsReducer,
	selection: selectionsReducer,
	rating: ratingReducer,
	daymoviescards: moviedaycardsReducer,
	genresiconscards: genresiconscardsReducer,
	genres: genresReducer,
	moviesbygenre: moviesbygenreReducer,
	actors: actorsReducer
});

const persistConfig = {
	key: 'root',
	storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [PERSIST, REHYDRATE, FLUSH, PAUSE, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
