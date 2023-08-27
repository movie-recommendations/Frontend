import { useNavigate } from 'react-router';
import './SelectionCard.css';
import { ICompilationsTwo } from 'src/types/Compilations.types';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/services/typeHooks';
import { getFilmsApi } from 'src/services/redux/slices/films/films';
import { getCompilationsApi } from 'src/services/redux/slices/compilations/compilations';

export const SelectionCard = ({
	compilations,
}: {
	compilations: ICompilationsTwo[];
}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleAllButtonClick = (item: any) => {
		localStorage.setItem('filmsBy', JSON.stringify(item));
		navigate('/selections');
	};

	return (
		<section className="selections">
			{compilations.map((item) => (
				<div
					key={item.id}
					className="selections_cards"
					onClick={() => handleAllButtonClick(item)}
				>
					<div className="selections_card">
						{item.movies.slice(0, 3).map((film) => (
							<img
								className="selections_img"
								key={film.id}
								src={film.v_picture}
								alt={film.title}
							/>
						))}
					</div>
					<h2 className="selections_title">{item.title}</h2>
					<p className="selections_description">{item.description}</p>
				</div>
			))}
		</section>
	);
};
