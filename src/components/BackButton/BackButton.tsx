import { FC } from 'react';
import { onegenre } from 'src/services/redux/slices/movieByGenre/moviesByGenre';

import './BackButton.css';
import { IButton } from 'src/types/Button.types';
import left from '../../images/left.svg';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BackButton: FC<IButton> = ({
	buttonText,
	handleButtonClick,
	type,
	disabled,
}) => {
	const navigate = useNavigate();
	const handButtonBackClick = () => {
		navigate('/onegenre');
	};
	const location = useLocation();
	return (
		<button
			className={
				location.pathname === '/preferences'
					? 'backbutton backbutton_type_preferences'
					: 'backbutton'
			}
			disabled={disabled}
			type={type}
			onClick={handleButtonClick}
		>
			<img className="arrow" src={left} alt="Стрелка назад" />
			{buttonText}
		</button>
	);
};

export default BackButton;
