import './SelectionCard.css';
import { ICompilationsTwo } from 'src/types/Compilations.types';

export const SelectionCard = ({
	compilations,
}: {
	compilations: ICompilationsTwo[];
}) => {
	return (
		<section className="selections">
			{compilations.map((item) => (
				<div key={item.id} className="selections_cards">
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
