import './PreferencesPage.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { FC, useEffect, useState } from 'react';
import { selectGenres } from 'src/services/redux/slices/genres/genres';
import BackButton from 'src/components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';
import { editFavGenres, selectUser } from 'src/services/redux/slices/user/user';
import GenreCheckbox from 'src/components/GenreCheckbox/GenreCheckbox';
import Button from 'src/components/Button/Button';
import ChangesSavedPopup from 'src/components/Popup/ChangesSavedPopup';

const PreferencesPage: FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const genres = useAppSelector(selectGenres);
	const user = useAppSelector(selectUser);
	const [isSavedPopupOpened, setIsSavedPopupOpened] = useState<boolean>(false);
	const [selectedGenres, setSelectedGenres] = useState<number[]>(
		user.fav_genres
	);

	const handleCheckboxChange = (id: number, checked: boolean) => {
		const newSelectedGenres = checked
			? [...selectedGenres, id]
			: selectedGenres.filter((genreId) => genreId !== id);

		setSelectedGenres(newSelectedGenres);
	};

	const renderButton = () => {
		if (selectedGenres.length !== user.fav_genres.length) {
			return false;
		}

		return [...selectedGenres]
			.sort()
			.every((genre, index) => genre === [...user.fav_genres].sort()[index]);
	};

	const handleSubmit = () => {
		dispatch(
			editFavGenres({ data: { fav_genres: selectedGenres }, token: user.token })
		)
			.unwrap()
			.then(() => {
				setIsSavedPopupOpened(true);
			})
			.catch((err) => console.log('dispatch editFavGenres err', err));
	};

	useEffect(() => {
		setIsSavedPopupOpened(false);
	}, []);

	return (
		<>
			<main className="preferences-page">
				<BackButton
					type={'button'}
					buttonText={'Назад'}
					handleButtonClick={() => navigate(-1)}
				/>
				<h2 className="preferences-page__title">Мои предпочтения</h2>
				<p className="preferences-page__subtitle">Избранные жанры</p>
				<ul className="preferences-page__container">
					{genres.map((genre) => (
						<li key={genre.id} className="preferences-page__list">
							<GenreCheckbox
								text={genre.title}
								color="white"
								onChange={handleCheckboxChange}
								id={genre.id}
								checked={selectedGenres.includes(genre.id)}
								image={genre.picture}
							/>
						</li>
					))}
				</ul>
				{/* <Button
					buttonText="Сохранить"
					handleButtonClick={handleSubmit}
					type={'button'}
					disabled={renderButton()}
				/> */}
				<div className="preferences-page__btn-container">
					<Button
						buttonText="Сохранить"
						handleButtonClick={handleSubmit}
						type={'button'}
						disabled={renderButton()}
					/>
				</div>
			</main>
			<ChangesSavedPopup
				isOpened={isSavedPopupOpened}
				setIsOpened={setIsSavedPopupOpened}
			/>
		</>
	);
};

export default PreferencesPage;
