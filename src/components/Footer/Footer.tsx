import { FC } from 'react';
import './Footer.css';
import scroll from '../../images/scroll.svg';

const Footer: FC = () => {
	const buttonUp = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		console.log('click');
		window.scrollBy(0, -window.innerHeight);
	};

	return (
		<footer className="footer">
			<h4 className="footer__desc">© 2023 КиноТочка. Все права защищены.</h4>
			<button onClick={buttonUp} className="footer__scroll">
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
