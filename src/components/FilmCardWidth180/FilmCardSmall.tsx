import './FilmCardSmall.css';
import { RatedElement } from 'src/components/RatedElement/RatedElement';
import { BookmarkSmall } from 'src/components/Bookmark_small/Bookmark_small';
import { IMovieCard } from 'src/types/MovieCard.types';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilmId } from 'src/services/redux/slices/filmid/filmid';
import { useEffect } from 'react';

export const FilmCardSmall = ({ film }: { film: IMovieCard }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();

	const handleImgClick = () => {
		if (location.pathname === '/movie-page') {
			window.location.reload();
			dispatch(setFilmId(film.id));
		} else {
			navigate('/movie-page');
			dispatch(setFilmId(film.id));
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0); 
	}, [location.pathname]);

	return (
		<section key={film.id} className="moviepage_card">
			<img className="moviepage_card-img" src={film.v_picture} alt="" onClick={handleImgClick} />
			<div className="bookmark-small">{<BookmarkSmall id={film.id} />}</div>
			<h4 className="moviepage_card-title">{film.title}</h4>
			<p className="moviepage_card-subtitle">{`${film.genres.join(', ')} • ${film.year
				}`}</p>
			<RatedElement
				imdb={film.rating.rate_imdb}
				kinopoisk={film.rating.rate_kinopoisk}
				isSearch={false}
			/>
		</section>
	);
};
