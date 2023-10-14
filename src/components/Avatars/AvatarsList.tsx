import { FC } from 'react';
import { Avatars } from './Avatars';
import { IAvatars } from 'src/types/Avatars.types';
import './Avatars.css';

export interface IAvatarListProps {
	avatars: IAvatars[];
	value: number;
	changeValue: (value: number) => void;
}

export const AvatarsList: FC<IAvatarListProps> = ({
	avatars,
	value,
	changeValue,
}) => {
	return (
		<div className="popup__avatar-list">
			{avatars.map((item) => (
				<Avatars
					key={item.id}
					data={item}
					value={value}
					changeValue={changeValue}
				/>
			))}
		</div>
	);
};
