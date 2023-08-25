import './AllGenresPage.css';
import { useEffect, useState } from 'react';
import { getGenres } from '../../services/redux/slices/genres/genres';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import {
	getMoviesByGenreApi,
	onegenre,
} from 'src/services/redux/slices/movieByGenre/moviesByGenre';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const AllGenresPage = () => {
	const navigate = useNavigate();
	const [checked, setChecked] = useState(false);
	const [GenreLinkClick, setGenreLinkClick] = useState('');
	const dispatch = useAppDispatch();
	const genre = useAppSelector((state) => state.genres.genres);

	useEffect(() => {
		dispatch(getGenres());
	}, []);

	const handleGenreClick = (itemslug: string, itemtitle: string) => {
		dispatch(getMoviesByGenreApi({ genres: itemslug }));
		localStorage.setItem('genre', itemtitle);
		navigate('/onegenre');
	};

	return (
		<section className="allgenrespage">
			<h2 className="title">Все жанры</h2>
			<ul className="allgenrespage__container">
				{genre.map((item) => (
					<li className="allgenrespage__list">
						<button
							className="allgenrespage__link"
							onClick={() => handleGenreClick(item.slug, item.title)}
						>
							<img
								className="allgenrespage__img"
								alt={item.slug}
								src={item.picture}
							></img>
							<p className="allgenrespage__title">{item.title}</p>
						</button>
					</li>
				))}
			</ul>
		</section>
	);
};

export default AllGenresPage;
