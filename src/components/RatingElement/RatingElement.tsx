import { FC } from 'react';
import './RatingElement.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import {
	deleteRatingApi,
	setRatingApi,
	updateRatingApi,
} from 'src/services/redux/slices/rating/rating';
import { IRating } from 'src/types/Rating.types';
import { selectUser } from '../../services/redux/slices/user/user';
import { getMoviebyidTokenApi } from 'src/services/redux/slices/moviebyid/moviebyid';

const RatingElement: FC<IRating> = ({ id }) => {
	const user = useAppSelector(selectUser);
	const movierating = useAppSelector(
		(state) => state.moviebyid.movie.user_rate
	);
	const dispatch = useAppDispatch();

	const handleRatingClick = async (value: number) => {
		if (movierating === 0) {
			await dispatch(
				setRatingApi({ id, rate: { rate: value }, token: user.token })
			);
		} else if (movierating !== value) {
			await dispatch(
				updateRatingApi({ id, rate: { rate: value }, token: user.token })
			);
		} else if (movierating === value) {
			await dispatch(deleteRatingApi({ id, token: user.token }));
		}
		await dispatch(getMoviebyidTokenApi({ filmId: id, token: user.token }));
	};

	return (
		<>
			{user.token ? (
				<div className="rating-element">
					<h2 className="rating-element__text">Ваша оценка - {movierating}</h2>
					<div className="rating-element__container">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
							<div
								key={value}
								className={`star__button ${
									movierating >= value ? 'star__button__filled' : ''
								}`}
								onClick={() => handleRatingClick(value)}
							/>
						))}
					</div>
				</div>
			) : null}
		</>
	);
};

export default RatingElement;
