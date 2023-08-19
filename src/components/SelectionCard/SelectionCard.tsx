import './SelectionCard.css';
import { ISelect } from 'src/types/Film.types';

export const SelectionCard = ({ selected }: { selected: ISelect[] }) => {
	return (
		<section className="selections">
			{selected.map((item) => (
				<div key={item.id} className="selections_cards">
					<div className="selections_card">
						{item.movie.slice(0, 3).map((film) => (
							<img
								className="selections_img"
								key={film.id}
								src={film.imageUrl}
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
