import './ErrorPage.css';
import img404 from '../../images/Group404.svg';
import React, { useEffect } from 'react';

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

	useEffect(() => {
		const updateMousePosition = (event: {
			clientX: number;
			clientY: number;
		}) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		};
		window.addEventListener('mousemove', updateMousePosition);
		return () => window.removeEventListener('mousemove', updateMousePosition);
	}, []);

	return mousePosition;
};

export default function ErrorPage() {
	const { x, y } = useMousePosition();

	return (
		<main className="error-page" id="error-page">
			<div className="error-page__status">
				{' '}
				<img
					src={img404}
					alt="404"
					style={{
						transform: `translate(-${x * 0.005}px, -${(y * 0.1) / 8}px)`,
					}}
				/>
			</div>
			<h1 className="error-page__message">Страница не найдена</h1>
			<span className="error-page__text">
				К сожалению, мы не смогли найти запрашиваемую вами страницу.
			</span>
			<button className="error-page__button">
				{' '}
				<a href="#/">На главную</a>
			</button>
		</main>
	);
}
