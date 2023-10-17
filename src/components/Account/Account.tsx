import { FC } from 'react';
import { useState } from 'react';
import './Account.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { selectUser, signOut } from 'src/services/redux/slices/user/user';
import { resetFavorites } from 'src/services/redux/slices/favorites/favorites';

const Account: FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
	const avatars = useAppSelector((state) => state.avatars.images);

	const avatarObject = avatars.find((avatar) => avatar.id === user.avatar);
	const avatarUrl = avatarObject ? avatarObject.avatar : '';

	const [isOpen, setIsOpen] = useState(false);

	const setProfileOpen = () => {
		setIsOpen(true);
	};

	const setProfileClose = () => {
		setIsOpen(false);
	};

	const { email, nickname } = useAppSelector(selectUser);

	return (
		<section className="account">
			{!user.email[0] ? (
				<Link to="/sign-in" className="account__login">
					<p className="account__login-text">Войти</p>
				</Link>
			) : (
				<>
					<div className="account__profile-icon" onMouseOver={setProfileOpen}>
						<Link to="/profile" className="account__profile-link">
							{user.avatar && user.avatar !== 0 ? (
								<img className="account__avatar-img" src={avatarUrl} />
							) : (
								<p className="account__profile-word">
									{user.nickname ? user.nickname[0] : user.email[0]}
								</p>
							)}
						</Link>
					</div>
					<nav
						className={`account__content ${isOpen && 'account__content_open'}`}
						onMouseOver={setProfileOpen}
						onMouseOut={setProfileClose}
					>
						<ul className="account__list" onMouseOver={setProfileOpen}>
							<p className="account__content-nik">{nickname}</p>
							<p className="account__content-email">{email}</p>
							<Link to="/favorites" className="account__content-link">
								Избранное
							</Link>
							<Link to="/will-see" className="account__content-link">
								Буду смотреть
							</Link>
							<Link to="/rated-films" className="account__content-link">
								Оцененное
							</Link>
							<button
								className="account__content-button"
								onClick={() => {
									dispatch(signOut());
									navigate('/');
									dispatch(resetFavorites());
								}}
							>
								Выйти
							</button>
						</ul>
					</nav>
				</>
			)}
		</section>
	);
};

export default Account;
