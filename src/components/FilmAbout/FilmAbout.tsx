import './FilmAbout.css';
import { FC } from 'react';
import { IFilmabout } from 'src/types/Moviebyid.types';

const FilmAbout: FC<IFilmabout> = ({ movie }) => {
	return (
		<div className="moviepage-description">
			<div className="moviepage-description__about">
				<h2 className="moviepage-description__title">О фильме</h2>
				<div className="moviepage-description__about__container">
					<p className="moviepage-description__about__text_add">Год</p>
					<p className="moviepage-description__about__text">
						{movie.premiere_date.substring(0, 4)}
					</p>
				</div>
				<br />
				<div className="moviepage-description__about__container">
					<p className="moviepage-description__about__text_add">Жанр</p>
					<p className="moviepage-description__about__text">
						{`${movie.genres.map((item) => item.title).join('\n')}`}
					</p>
				</div>
				<br />
				<div className="moviepage-description__about__container">
					<p className="moviepage-description__about__text_add">Страна</p>
					<p className="moviepage-description__about__text">
						{`${movie.countries.map((item) => item.title).join('\n')}`}
					</p>
				</div>
				<br />
				<div className="moviepage-description__about__container">
					<p className="moviepage-description__about__text_add">Режиссер</p>
					<p className="moviepage-description__about__text">
						{`${movie.directors.map((item) => item).join('\n')}`}
					</p>
				</div>
				<br />
				<div className="moviepage-description__about__container">
					<p className="moviepage-description__about__text_add">Категория</p>
					<p className="moviepage-description__about__text">
						{movie.categories.title}
					</p>
				</div>
				<br />
				<div className="moviepage-description__about__container">
					<p className="moviepage-description__about__text_add">Возраст</p>
					<p className="moviepage-description__about__text">
						{movie.age_limit}
					</p>
				</div>
				<br />
			</div>
		</div>
	);
};

export default FilmAbout;
