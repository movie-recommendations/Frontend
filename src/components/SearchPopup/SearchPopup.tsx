import { FC } from 'react';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SearchPopup.css";
import Search from "../Search/Search";
import ExtendedSearch from "../ExtendedSearch/ExtendedSearch";
import Adjustments_Black from '../../images/Adjustments_Black.svg';
import X_Grey from '../../images/X_Grey.svg';
import search from '../../images/search.svg'
import { ISearchPopup } from "src/types/SearchPopup.types";

const SearchPopup: FC<ISearchPopup> = ({ handleSearchPopup, setSearchClose }) => {

    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [value, setValue] = useState('');
    const [isOpenExtended, setIsOpenExtended] = useState(false);


    useEffect(() => {
        if (value.length > 0) {
            setIsOpenSearch(true);
        }
        if (value.length < 1) {
            setIsOpenSearch(false);
        }
    }, [value]);

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
                            onClick={setSearchClose}

                        >
                            <img
                                className="search-popup__search-button_search"
                                src={Adjustments_Black}
                                alt="Кнопка расширенного поиска"
                            />
                        </button>
                        <button
                            className="search-popup__search-button"
                            type="button"
                            onClick={handleOpenExtended}

                        >
                            <img
                                className="search-popup__search-button_search"
                                src={Adjustments_Black}
                                alt="Кнопка расширенного поиска"
                            />
                        </button>
                        <button
                            className="search-popup__search-button"
                            type="button"

                        >
                            <img
                                className="search-popup__search-button_search"
                                src={X_Grey}
                                alt="Кнопка расширенного поиска"
                                onClick={handleSearchPopup}
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
