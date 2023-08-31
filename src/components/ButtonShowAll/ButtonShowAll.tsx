import './ButtonShowAll.css';
import Arrowright from '../../images/Arrowright.svg';

export const ButtonShowAll = ({
	onClick,
}: {
	onClick: React.MouseEventHandler;
}) => {
	return (
		<div className="flexbutton">
			<button className="button-showall" type="button" onClick={onClick}>
				Показать все
			</button>
			<img className="arrowright" src={Arrowright} alt="Стрелка вправо" />
		</div>
	);
};
