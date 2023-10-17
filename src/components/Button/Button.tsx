import { FC } from 'react';

import './Button.css';
import { IButton } from 'src/types/Button.types';
import { useLocation } from 'react-router-dom';

const Button: FC<IButton> = ({
	buttonText,
	handleButtonClick,
	type,
	disabled,
	className,
}) => {
	const location = useLocation();
	return (
		<button
			className={
				className
					? className
					: `${
							buttonText !== 'Сохранить' && buttonText !== 'Войти'
								? `${
										location.pathname === '/sign-in' ||
										location.pathname === '/sign-up'
											? 'button button_type_toMain-sign-in'
											: 'button button_type_toMain'
								  }`
								: `${
										location.pathname === '/preferences'
											? 'button button_type_preferences'
											: `${
													location.pathname === '/profile'
														? 'button button_type_profile'
														: 'button'
											  }`
								  }`
					  }`
			}
			disabled={disabled}
			type={type}
			onClick={handleButtonClick}
		>
			{buttonText}
		</button>
	);
};

export default Button;
