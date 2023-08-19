import './MoreButton.css';

export const MoreButton = ({
	onClick,
}: {
	onClick: React.MouseEventHandler;
}) => {
	return (
		<button className="cards__button" type="button" onClick={onClick}>
			Показать еще
		</button>
	);
};
