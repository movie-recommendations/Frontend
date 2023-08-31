import { FC } from 'react';
import { useState, useEffect } from 'react';
import './Header.css';
import logo1 from '../../images/logo.svg';
import logo2 from '../../images/Logo2.svg';
import adjustments from '../../images/adjustments.svg';
import search from '../../images/search.svg';
import Account from '../Account/Account';
import Search from '../Search/Search';
import ExtendedSearch from '../ExtendedSearch/ExtendedSearch';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../services/typeHooks';

const Header: FC = () => {
	const films = useAppSelector(
		(state) => state.movieByAdvancedSearc.moviesSearch
	);
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

	const navigate = useNavigate();

	// const onLinkclick = (event: any) => {
	// 	event.preventDefault();
	// 	navigate(`/search-result?name=${values}`);
	// 	setValues('');
	// };

	useEffect(() => {
		if (values.length > 0) {
			setIsOpenSearch(true);
		}
		if (values.length < 1) {
			setIsOpenSearch(false);
		}
	}, [values]);

	const setSearchClose = () => {
		setIsOpenSearch(false);
		setIsOpenExtended(false);
	};

	const Click = (e: any) => {
		e.preventDefault();
		navigate('/search-result', { state: films });
		setSearchClose();
	};

	return (
		<header className="header" id="header">
			<div className="header__logo">
				<img
					className="header__logo1"
					alt="лого"
					src={logo1}
					onMouseOver={setNavOpen}
				/>
				<Link to="/">
					<img
						className="header__logo2"
						alt="лого"
						src={logo2}
						onMouseOver={setNavOpen}
					/>
				</Link>
			</div>
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
						value={values}
						id="name"
						name="name"
						type="text"
						placeholder="Какой фильм вы хотите найти?"
						onChange={handleChange}
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
					<button onClick={Click} className="header__search-button">
						<img
							className="header__search-button_search"
							src={search}
							alt="Кнопка поиска"
							onClick={setSearchClose}
						/>
					</button>
				</form>
				<Search
					isOpenSearch={isOpenSearch}
					isClose={setSearchClose}
					values={values}
				/>
				<ExtendedSearch
					isOpenExtended={isOpenExtended}
					isClose={setSearchClose}
				/>
			</div>
			<Account
			// isLoggedIn={true}
			/>
		</header>
	);
};

export default Header;
