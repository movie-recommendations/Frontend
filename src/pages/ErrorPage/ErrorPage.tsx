import './ErrorPage.css';

export default function ErrorPage() {
	return (
		<main className="error-page" id="error-page">
			<h1 className="error-page__message">Страница не найдена</h1>
			<span className="error-page__status">404</span>
		</main>
	);
}
