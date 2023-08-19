import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './services/redux/store';

import './index.css';

import { FlanksTypes } from './types/Flanks.types';
import { Layout } from './components/Layout/Layout';

import MainPage from './pages/MainPage/MainPage';
import MoviePage from './pages/MoviePage/MoviePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import FlanksPage from './pages/FlanksPage/FlanksPage';
import ConfirmEmailPage from './pages/auth/ConfirmEmailPage';
import RecoverPasswordPage from './pages/auth/RecoverPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import PreferencesPage from './pages/PreferencesPage/PreferencesPage';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import { SearchResultPage } from './pages/SearchResultsPage/SearchResultPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { WindowResize } from './components/WindowResize/WindowResize';
import { useAppDispatch } from './services/typeHooks';
import { getGenres } from './services/redux/slices/genres/genres';
import  AllGenresPage  from './pages/AllGenresPage/AllGenresPage';
import  OneGenrePage  from './pages/OneGenrePage/OneGenrePage';

const Root: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getGenres());
	}, []);

	return (
		<div className="page">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path="/sign-up" element={<SignUpPage />} />
					<Route path="/sign-in" element={<SignInPage />} />
					<Route path="/recover-password" element={<RecoverPasswordPage />} />
					<Route path="/reset-password" element={<ResetPasswordPage />} />
					<Route path="/confirm-email" element={<ConfirmEmailPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route
						path="/rated-films"
						element={<FlanksPage formName={FlanksTypes.ratedFilms} />}
					/>
					<Route path="/preferences" element={<PreferencesPage />} />
					<Route path="/allgenres" element={<AllGenresPage />} />
					<Route path="/onegenre" element={<OneGenrePage />} />
					<Route
						path="/will-see"
						element={<FlanksPage formName={FlanksTypes.willSee} />}
					/>
					<Route
						path="/favorites"
						element={<FlanksPage formName={FlanksTypes.favorites} />}
					/>
					<Route
						path="/collections"
						element={<FlanksPage formName={FlanksTypes.collections} />}
					/>
					<Route path="/movie-page" element={<MoviePage />} />
					<Route path="/search-result" element={<SearchResultPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
			<WindowResize />
		</div>
	);
};

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={<div>Loading...</div>} persistor={persistor}>
				<HashRouter>
					<Root />
				</HashRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
