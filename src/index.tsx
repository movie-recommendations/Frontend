import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import { FormTypes } from './components/Form/Form';
import { Layout } from './components/Layout/Layout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './services/redux/store';

import './index.css';
import MainPage from './pages/MainPage/MainPage';
import MoviePage from './pages/MoviePage/MoviePage';

const Root: FC = () => {
	return (
		<div className="page">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route
						path="/sign-up"
						element={<Auth formName={FormTypes.signUp} />}
					/>
					<Route
						path="/sign-in"
						element={<Auth formName={FormTypes.signIn} />}
					/>
					<Route
						path="/forgot-password"
						element={<Auth formName={FormTypes.recoverPassword} />}
					/>
					<Route path="*" element={<ErrorPage />} />
					<Route path="/movie-page" element={<MoviePage />} />
				</Route>
			</Routes>
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
				<BrowserRouter>
					<Root />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
