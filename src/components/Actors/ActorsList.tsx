// import Actors from './Actors';
import './ActorsList.css';
import { FC } from 'react';
import { ActorsListProps } from 'src/types/Rating.types';

const ActorsList: FC<ActorsListProps> = ({ actors }) => {
	return (
		<section className="actorslist">
			<h1 className="actorslist__title">В главных ролях</h1>
			<div className="actorslist__container">
				<p className="actorslist__text">
					{actors.map((item) => item).join(', ')}
				</p>
			</div>
		</section>
	);
};

export default ActorsList;
