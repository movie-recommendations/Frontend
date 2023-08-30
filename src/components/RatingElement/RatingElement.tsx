import { FC, useEffect } from 'react';
import React, { useState } from 'react';
import './RatingElement.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { getMoviesRating } from 'src/services/redux/slices/rating/rating';
import { IRating } from 'src/types/Rating.types';
import { selectUser } from '../../services/redux/slices/user/user';
import { getMoviebyidApi, getMoviebyidTokenApi } from 'src/services/redux/slices/moviebyid/moviebyid';
import { useNavigate } from 'react-router';

const RatingElement: FC<IRating> = ({ id, rate }) => {
	const user = useAppSelector(selectUser);
	const navigate = useNavigate();
	const movierating = useAppSelector((state) => state.moviebyid.movie.user_rate);
	// const [rating, setRating] = useState(movierating);
	const dispatch = useAppDispatch();
	console.log(movierating, "rating")
	const handleRatingClick = async (value: React.SetStateAction<number>) => {
		if (movierating === 0) {
			await dispatch(
				getMoviesRating({
					id,
					rate: { rate: value },
					token: user.token,
					method: "POST",
				})
			);
		}
		else {
			await dispatch(
				getMoviesRating({
					id,
					rate: { rate: value },
					token: user.token,
					method: "PUT",
				})
			);
		}
		await dispatch(getMoviebyidTokenApi({ filmId: id, token: user.token }));
		// if (user.token) {
		// } else {
		// 	dispatch(getMoviebyidApi(id));
		// }

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
								className={`star__button ${movierating >= value ? 'star__button__filled' : ''
									}`}
								onClick={() => handleRatingClick(value)}
							/>
						))}
					</div>
				</div>
			) : (
				null
			)}

		</>
	);
};

export default RatingElement;
