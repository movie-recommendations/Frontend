import { FC } from 'react';
import './SaveButton.css';

export interface IButton {
	buttonText: string;
	handleButtonClick: any;
}
const SaveButton: FC<IButton> = ({ buttonText, handleButtonClick }) => {
	return (
		<section>
			<button
				className="save-button"
				// disabled
				type="button"
				onClick={handleButtonClick}
			>
				{buttonText}
			</button>
		</section>
	);
};

export default SaveButton;
