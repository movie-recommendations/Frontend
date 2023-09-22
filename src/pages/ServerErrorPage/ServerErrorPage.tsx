import './ServerErrorPage.css';
import React, { useEffect } from 'react';

export default function ServerErrorPage() {
	return (
		<main className="server-error">
			<div className="server-error__container">
				<h1 className="server-error__title">500</h1>
				<h2 className="server-error__subtitle">Ошибка сервера</h2>
				<p className="server-error__description">
					На сервере произошла непредвиденная ошибка.
				</p>
				<p className="server-error__description">
					Мы уже исправляем ее. Пожалуйста, попробуйте обновить страницу позже
				</p>
			</div>
		</main>
	);
}
