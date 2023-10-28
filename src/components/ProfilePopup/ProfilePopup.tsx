
import { useState } from "react";
import "./ProfilePopup.css";
import { selectUser, signOut } from 'src/services/redux/slices/user/user';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { resetFavorites } from 'src/services/redux/slices/favorites/favorites';
import { NavLink, useNavigate, Navigate } from "react-router-dom";

const ProfilePopup = () => {
    const activeStyle = { // Для стилей активной ссылки NavLink
        borderBottom: '1px solid',
        paddingBottom: '7px',
    };
    const { email, nickname } = useAppSelector(selectUser);

    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    return (
        <div className="profile-popup">
            <div className="profile-popup__cover" />
            <div className="profile-popup__container">
                <ul className="profile-popup__list">
                    <p className="profile-popup__content-nik">{nickname}</p>
                    <p className="profile-popup__content-email">{email}</p>
                </ul>
                <nav className="profile-popup__links-container">
                    <div className="profile__films profile__films_popup">
                        <NavLink to="/favorites" className="profile-popup__homepage">Избранное</NavLink>
                        <NavLink to="/will-see" className="profile-popup__homepage">Буду смотреть</NavLink>
                        <NavLink to="/rated-films" className="profile-popup__homepage">Оцененное</NavLink>
                    </div>
                    <div
                        className="profile-popup__exit"
                        onClick={() => {
                            dispatch(signOut());
                            navigate('/');
                            dispatch(resetFavorites());
                        }}
                    >
                        Выйти
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default ProfilePopup
