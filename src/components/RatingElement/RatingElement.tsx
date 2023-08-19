import { FC } from 'react';
import React, { useState } from 'react';
import './RatingElement.css';

const RatingElement: FC = () => {
	const [rating, setRating] = useState(0);

	const handleRatingClick = (value: React.SetStateAction<number>) => {
		setRating(value);
	};

	return (
		<div className="rating-element">
			<h2 className="rating-element__text">Ваша оценка - {rating}</h2>
			<div className="rating-element__container">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
					<div
						key={value}
						className={`star__button ${
							rating >= value ? 'star__button__filled' : ''
						}`}
						onClick={() => handleRatingClick(value)}
					/>
				))}
			</div>
		</div>
	);
};

export default RatingElement;
