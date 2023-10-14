import './SeachResult.css';
import { RatedElement } from '../RatedElement/RatedElement';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { selectUser } from 'src/services/redux/slices/user/user';
import { useNavigate } from 'react-router';
import {
	getMoviebyidApi,
	getMoviebyidTokenApi,
} from 'src/services/redux/slices/moviebyid/moviebyid';
import { BookmarkSmall } from '../Bookmark_small/Bookmark_small';
import { IMovieAdvancedCard } from 'src/types/MovieByAdvancedSearch.types';
import { useState } from 'react';

export const SeachResult = ({ film }: { film: IMovieAdvancedCard }) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);

	const [imgHover, setImgHover] = useState(false);

	const handleClick = () => {
		if (user.token) {
			dispatch(getMoviebyidTokenApi({ filmId: film.id, token: user.token }));
		} else {
			dispatch(getMoviebyidApi(film.id));
		}
		navigate('/movie-page');
		window.scrollTo(0, 0);
	};

	function handleImgHover() {
		setImgHover(true);
	}

	function handleImgLeave() {
		setImgHover(false);
	}

	return (
		<section className="search">
			<div className="search_img-container">
				<div
					className="search-img-background"
					onClick={handleClick}
					onMouseEnter={handleImgHover}
					onMouseLeave={handleImgLeave}
				>
					<img className="search_img" src={film.v_picture} alt="" />
				</div>
				<div className="button__container">
					<BookmarkSmall id={film.id} />
				</div>
			</div>
			<div className="search_profile">
				<h1
					className={
						imgHover ? 'search_title search_title_type_hover' : 'search_title'
					}
					onClick={handleClick}
				>
					{film.title}
				</h1>
				<h3 className="search_h3">{`${`${film.genres[0]}`}${
					film.genres[1] ? `, ${film.genres[1]}` : ''
				} • ${film.year}`}</h3>
				<h3 className="search_h3">{`Режисер: ${film.directors.join(', ')}`}</h3>
				<h3 className="search_h3">{`В ролях: ${film.actors.join(', ')}`}</h3>
				<RatedElement
					imdb={film.rating.rate_imdb}
					kinopoisk={film.rating.rate_kinopoisk}
					isSearch={false}
				/>
			</div>
		</section>
	);
};
