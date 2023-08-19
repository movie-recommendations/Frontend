import { FC } from 'react';

import { ISliderController } from '../../types/SliderController.types';
import './SliderController1.css';

const SliderController: FC<ISliderController> = ({
	direction,
	canScrollLeft,
	canScrollRight,
	handleScroll,
}) => {
	return (
		<button
			disabled={direction === 'left' ? canScrollLeft : canScrollRight}
			id={direction}
			onClick={() => handleScroll(direction)}
			className={`slider-controller slider-controller_direction_${direction}`}
			type="button"
		></button>
	);
};

export default SliderController;
