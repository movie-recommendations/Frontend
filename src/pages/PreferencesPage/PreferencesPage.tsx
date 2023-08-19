import './PreferencesPage.css';
import { useAppSelector } from '../../services/typeHooks';
import { FC, useState } from 'react';
import CheckboxMain from '../../components/CheckboxMain/CheckboxMain';
import SaveButton from '../../components/SaveButton/SaveButton';
import PopupSaveButton from 'src/components/PopupSaveButton/PopupSaveButton';
import { selectGenres } from 'src/services/redux/slices/genres/genres';
import  BackButton  from 'src/components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';

const PreferencesPage: FC = () => {
	const genres = useAppSelector(selectGenres);
	const [checked, setChecked] = useState(false);
	const [SaveButtonPopupOpen, setSaveButtonPopupOpen] = useState(false);

	const handleChange = () => {
		setChecked(!checked);
	};

	const handleSaveButtonClick = () => {
		setSaveButtonPopupOpen(!SaveButtonPopupOpen);
	};

	const navigate = useNavigate();

	const handButtonBackClick = () => {
		navigate('/');
	};

	return (
		<section className="preferencespage">
			<BackButton  type={'button'} buttonText={'Назад'} handleButtonClick={handButtonBackClick}
			/>
			<h2 className="title">Мои предпочтения</h2>
			<h3 className="subtitle">Избранные жанры</h3>
			<ul className="preferencespage__container">
				{genres.map((genre) => (
					<li className="preferencespage__list">
						<CheckboxMain text={genre.title} onChange={handleChange} />
					</li>
				))}
			</ul>
			<PopupSaveButton
				handleButtonClick={handleSaveButtonClick}
				isPopupOpen={SaveButtonPopupOpen}
			/>
			<SaveButton
				buttonText="Сохранить"
				handleButtonClick={handleSaveButtonClick}
			/>
		</section>
	);
};

export default PreferencesPage;
