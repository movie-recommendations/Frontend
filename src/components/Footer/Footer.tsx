import { FC } from 'react';
import './Footer.css';
import scroll from '../../images/ArrowUp.svg';

const Footer: FC = () => {
	const buttonUp = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', () => {
		const ScrollBtn = document.querySelector('.footer__scroll');
		if (window.scrollY < 900) {
			ScrollBtn?.classList.add('scroll-hidden');
		} else {
			ScrollBtn?.classList.remove('scroll-hidden');
		}
	});

	return (
		<footer className="footer">
			<h4 className="footer__desc">
				© 2023 КиноТочка. Платформа рекомендаций фильмов. Все права защищены.
			</h4>
			<button onClick={buttonUp} className="footer__scroll scroll-hidden">
				<img
					className="footer__scroll-button"
					alt="скролл вверх"
					src={scroll}
				/>
			</button>
		</footer>
	);
};

export default Footer;
