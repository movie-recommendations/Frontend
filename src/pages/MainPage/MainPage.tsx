import { Link } from 'react-router-dom';
import './MainPage.css';

export default function MainPage() {
	return (
		<main className="main-page" id="main-page">
			<h1 className="main-page__title">Main</h1>
			<Link to="/sign-in">Войти</Link>
			<Link to="/sign-up">Зарегистрироваться</Link>
			<Link to="/movie-page">Фильмы</Link>
		</main>
	);
}
