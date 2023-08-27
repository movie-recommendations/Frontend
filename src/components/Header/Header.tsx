import { FC } from 'react';
import { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import adjustments from '../../images/adjustments.svg';
import search from '../../images/search.svg';
import Account from '../Account/Account';
import Search from '../Search/Search';
import ExtendedSearch from '../ExtendedSearch/ExtendedSearch';
import { Link } from 'react-router-dom';

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenExtended, setIsOpenExtended] = useState(false);

	const handleOpenExtended = () => {
		if (isOpenExtended === true) {
			setIsOpenExtended(false);
		} else {
			setIsOpenExtended(true);
		}
	};

	const setNavOpen = () => {
		setIsOpen(true);
	};

	const setNavClose = () => {
		setIsOpen(false);
	};

	const [values, setValues] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target;
		const value = target.value;
		setValues(value);
	};

	const [isOpenSearch, setIsOpenSearch] = useState(false);

	useEffect(() => {
		if (values.length > 0) {
			setIsOpenSearch(true);
		}
		if (values.length < 1) {
			setIsOpenSearch(false);
		}
	}, [values]);

	// const setSearchClose = () => {
	// 	setIsOpenSearch(false);
	// };

	return (
		<header className="header" id="header">
			<img
				className="header__logo"
				alt="лого"
				src={logo}
				onMouseOver={setNavOpen}
			/>
			<nav
				className={`header__content ${isOpen && 'header__content_open'}`}
				onMouseOver={setNavOpen}
				onMouseOut={setNavClose}
			>
				<ul className="header__list" onMouseOver={setNavOpen}>
					<Link to="/" className="header__content-link">
						Главная
					</Link>
					<Link to="/collections" className="header__content-link">
						Все подборки
					</Link>
					<Link to="/allgenres" className="header__content-link">
						Фильмы по жанрам
					</Link>
				</ul>
			</nav>
			<div className="header__container">
				<form className="header__search">
					<input
						className="header__search-input"
						id="name"
						name="name"
						type="text"
						placeholder="Какой фильм вы хотите найти?"
						onChange={handleChange}
						// onBlur={setSearchClose}
						autoComplete="off"
					/>
					<button
						className="header__search-button"
						type="button"
						onClick={handleOpenExtended}
					>
						<img
							className="header__search-button_search"
							src={adjustments}
							alt="Кнопка расширенного поиска"
						/>
					</button>
					<Link to="/search-result" className="header__search-button">
						<img
							className="header__search-button_search"
							src={search}
							alt="Кнопка поиска"
						/>
					</Link>
				</form>
				<Search isOpenSearch={isOpenSearch} values={values} />
				<ExtendedSearch isOpenExtended={isOpenExtended} />
			</div>
			<Account
			// isLoggedIn={true}
			/>
		</header>
	);
};

export default Header;
