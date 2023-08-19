import { FC } from 'react';

import './Button.css';
import { IButton } from 'src/types/Button.types';

const Button: FC<IButton> = ({
	buttonText,
	handleButtonClick,
	type,
	disabled,
}) => {
	return (
		<button
			className="button"
			disabled={disabled}
			type={type}
			onClick={handleButtonClick}
		>
			{buttonText}
		</button>
	);
};

export default Button;
