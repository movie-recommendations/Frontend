import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./SearchPopup.css";
import Search from "../Search/Search";
import ExtendedSearch from "../ExtendedSearch/ExtendedSearch";
import adjustments from '../../images/adjustments.svg';

const SearchPopup = () => {

    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [value, setValue] = useState('');
    const [isOpenExtended, setIsOpenExtended] = useState(false);
    const setSearchClose = () => {
        setIsOpenSearch(true);
        setIsOpenExtended(true);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const val = target.value;
        setValue(val);
    };

    const handleOpenExtended = () => {
        if (isOpenExtended === true) {
            setIsOpenExtended(false);
        } else {
            setIsOpenExtended(true);
        }
    };

    return (
        <div className="search-popup">
            <div className="search-popup__cover" />
            <div className="search-popup__container">
                <div className="search-popup__container">
                    <form className="search-popup__search">
                        <input
                            className="search-popup__search-input"
                            value={value}
                            id="name1"
                            name="name1"
                            type="text"
                            placeholder="Какой фильм вы хотите найти?"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <button
                            className="search-popup__search-button"
                            type="button"
                            onClick={handleOpenExtended}
                        >
                            <img
                                className="search-popup__search-button_search"
                                src={adjustments}
                                alt="Кнопка расширенного поиска"
                            />
                        </button>
                    </form>
                    <Search
                        isOpenSearch={isOpenSearch}
                        isClose={setSearchClose}
                        values={value}
                    />
                    <ExtendedSearch
                        isOpenExtended={isOpenExtended}
                        isClose={setSearchClose}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchPopup
