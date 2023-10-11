import Button from '../Button/Button';
import { FC, useState } from 'react';
import Popup from './Popup';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import {
	clearSelectedAvatar,
	setSelectedAvatar,
} from 'src/services/redux/slices/avatars/avatars';
import { AvatarsList } from '../Avatars/AvatarsList';

interface IChangesAvatarPopup {
	isOpened: boolean;
	setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangeAvatarPopup: FC<IChangesAvatarPopup> = ({
	isOpened,
	setIsOpened,
}) => {
	const dispatch = useAppDispatch();

	const images = useAppSelector((state) => state.avatars.images);
	console.log(images);
	const [selectedValue, setSelectedValue] = useState(0);

	const handleChangeValue = (value: number) => {
		setSelectedValue(value);
	};

	const handleSaveAvatar = () => {
		const selectedImage = images.find((image) => image.id === selectedValue);
		dispatch(setSelectedAvatar(selectedImage));
		setIsOpened(false);
	};

	const handleDeleteAvatar = () => {
		dispatch(clearSelectedAvatar());
	};

	return (
		<Popup isOpened={isOpened} setIsOpened={setIsOpened}>
			<div className="popup__avatar">
				<h4 className="popup__title popup__title_type_avatar">
					Изменить аватарку
				</h4>
				<form>
					<AvatarsList
						avatars={images}
						value={selectedValue}
						changeValue={handleChangeValue}
					/>
					<Button
						buttonText={'Сохранить'}
						type="button"
						handleButtonClick={handleSaveAvatar}
						disabled={selectedValue ? false : true}
					/>
					{/* <Button
						buttonText={'Удалить'}
						type="button"
						handleButtonClick={handleDeleteAvatar}
						// disabled={selectedValue ? true : false}
					/> */}
					{/* <button
						type="button"
						className="popup__close-avatar"
						onClick={ handleSaveAvatar}
					>
						Сохранить
					</button> */}
				</form>
				<button
					className="popup__close-avatar"
					onClick={() => setIsOpened(false)}
				>
					Отменить
				</button>
			</div>
		</Popup>
	);
};

export default ChangeAvatarPopup;
