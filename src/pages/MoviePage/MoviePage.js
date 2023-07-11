/* eslint-disable no-unused-vars */

import { useState } from 'react';
import './MoviePage.css';
// import pic from "../../images/123.jpg";
// import icon from "../../images/Icon.svg";
// import imdb from "../../images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg";
// import rate from "../../images/Vector.svg";
import ActorsList from './Actors/ActorsList';
import ProducersList from './Producers/ProducersList';
import PopupTrailer from './PopupTrailer/PopupTrailer';
// import meme from "../../images/3212.jpeg"
// import meme2 from "../../images/12-1.webp"

const movie = {
    id: 1,
    title: "Переводчик",
    original_title: "Translator",
    premiere_date: 2002,
    year: 2002,
    rate_imdb: 7.2,
    rate_another: 6.4,
    description: "Афганистан, март 2018 года. Во время спецоперации по поиску оружия талибов отряд сержанта армии США Джона Кинли попадает в засаду. В живых остаются только сам Джон, получивший ранение, и местный переводчик Ахмед, который сотрудничает с американцами. Очнувшись на родине, Кинли не помнит, как ему удалось выжить, но понимает, что именно Ахмед спас ему жизнь, протащив на себе через опасную территорию. Теперь чувство вины не даёт Джону покоя, и он решает вернуться за Ахмедом и его семьёй, которых в Афганистане усиленно ищут талибы.",
    // picture: pic,
    genres: "comedy",
    director: [{
        id: 1,
        name: "Ричи Гай",
        // picture: meme,
    },
    {
        id: 2,
        name: "Кристофер Нолан",
        // picture: meme2,
    },
    {
        id: 3,
        name: "Гай",
        // picture: meme,
    }],
    actors: [{
        id: 1,
        name: "Джейк Джилленхолл",
        // picture: meme2,
    },
    {
        id: 2,
        name: "Доминик Торетто",
        // picture: meme,
    },
    {
        id: 3,
        name: "Семья",
        // picture: meme2,
    }],
    country: "Россия",
    category: "",
    durations_min: 210,
}

function MoviePage() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const switchPopupTrailer = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    function handleAddToFavourite() {
        console.log("2") // {movies_rating - is_favourite: true}
    }

    function handleWillWatch() {
        console.log("3") // {movies_rating - must_see: true}
    }

    function handleWatched() {
        console.log("4") // {movies_rating - is_viewed: true}
    }

    return (
        <section className="moviepage">
            <div className="movie-block">
                <img
                    className="movie-block__img"
                    alt=""
                    src={movie.picture}
                />
                <div className="movie-block__text">
                    <h2 className="movie-block__text_title">{movie.title}</h2> {/* тут пропс на название фильма */}
                    <p className="movie-block__text_year">{movie.year}</p> {/* тут пропс на год фильма */}
                    <p className="movie-block__text_subtitle">{movie.description}</p> {/* тут пропс на описание фильма */}
                </div>
                <div className='movie-block__rating__container'>
                    <div className='movie-block__rating__container_plus'>
                        <div className="movie-block__rating">
                            <img
                                className="movie-block__rating__img"
                                alt=""
                                // src={rate}
                            />
                            <p>{movie.rate_another}</p>  {/* тут пропс на рейтинг */}
                        </div>
                        <div className="movie-block__rating">
                            <img
                                className="movie-block__rating__img"
                                alt=""
                                // src={imdb}
                            />
                            <p>{movie.rate_imdb}</p> {/* тут пропс на рейтинг */}
                        </div>
                    </div>
                    <div className='movie-block__rating__text__container'>
                        <p className="movie-block__rating__text">10</p> {/* тут пропс на рейтинг */}
                        <p className="movie-block__rating__subtext">{100} оценок</p> {/* тут пропс на кол-во оценок */}
                    </div>
                </div>
            </div>
            <div className="moviepage__button__container">
                <button className="moviepage__button" onClick={switchPopupTrailer}>
                    <img
                        className="moviepage__button_img"
                        alt=""
                        // src={icon}
                    />
                    <span className="moviepage__button__text">Смотреть трейлер</span>
                </button>
                <button className="moviepage__button_favourite" onClick={handleAddToFavourite}>
                    Кнопка Избранное
                </button>
                <button className="moviepage__button_later" onClick={handleWillWatch}>
                    Кнопка Буду смотреть
                </button>
                <button className="moviepage__button_seen" onClick={handleWatched}>
                    Кнопка Просмотрено
                </button>
            </div>
            <ActorsList actors={movie.actors}/>
            <ProducersList producers={movie.director} />
            <PopupTrailer
                isPopupOpen={isPopupOpen}
                switchPopupTrailer={switchPopupTrailer}
            />
        </section>
    );
}

export default MoviePage;
