import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./NavigationPopup.css";

const NavigationPopup = () => {
    const activeStyle = { // Для стилей активной ссылки NavLink
        borderBottom: '1px solid',
        paddingBottom: '7px',
    };

    return (
        <div className="navigation-popup">
            <div className="navigation-popup__cover" />
            <div className="navigation-popup__container">

                <nav className="navigation-popup__links-container">
                    <div className="navigation__films navigation__films_popup">
                        <NavLink to="/" className="navigation-popup__homepage">Главная</NavLink>
                        <NavLink to="/collections" className="navigation-popup__homepage">Все подборки</NavLink>
                        <NavLink to="/allgenres" className="navigation-popup__homepage">Фильмы по жанрам</NavLink>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavigationPopup
