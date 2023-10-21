import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./NavigationPopup.css";

const NavigationPopup = () => {
    const activeStyle = { // Для стилей активной ссылки NavLink
        borderBottom: '1px solid',
        paddingBottom: '7px',
    };

    const [menuIsOpened, setMenuIsOpened] = useState(false)

    function handleMenuClick() {
        setMenuIsOpened(!menuIsOpened)
    }

    return (
        <div className="navigation-popup">
            <div className="navigation-popup__cover" />
            <div className="navigation-popup__container">
                <button className="navigation-popup__close-button"
                    type="button" aria-label="Close-icon" onClick={handleMenuClick} />
                <nav className="navigation-popup__links-container">
                    <div className="navigation__films navigation__films_popup">
                        <NavLink to="/" className="navigation-popup__homepage" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Главная</NavLink>
                        <NavLink to="" className="navigation__movies navigation__movies_popup" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Фильмы</NavLink>
                        <NavLink to="/" className="navigation__movies navigation__movies_popup" style={({ isActive }) => (isActive ? activeStyle : undefined)} >Сохраненные фильмы</NavLink>
                    </div>
                    <NavLink to="/" className="navigation__account navigation__account_popup" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                        <p
                            className="navigation__account-link navigation__account-link_popup">Аккаунт</p>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default NavigationPopup
