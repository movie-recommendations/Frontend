import './FilmDescription.css';
import { FC } from 'react';
import { IDescription } from 'src/types/Moviebyid.types';

const FilmDescription: FC<IDescription> = ({ description }) => {
	return (
		<div className="moviepage-description">
			<div className="moviepage-description__container">
				<h2 className="moviepage-description__title">Описание</h2>
				<p className="moviepage-description__subtitle">{description}</p>
			</div>
		</div>
	);
};

export default FilmDescription;
