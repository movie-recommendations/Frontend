import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import './SpecialForYou.css';
import { getFilmsApi } from '../../services/redux/slices/films/films';
import { FC } from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router';

export const SpecialForYou: FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const films = useAppSelector((state) => state.films.films[5]);
	const films2 = useAppSelector((state) => state.films.films[0]);

	useEffect(() => {
		dispatch(getFilmsApi());
	}, []);

	function handleButtonClick() {
		navigate('/sign-in');
	}
	return (
		<section className="specialforyou">
			<div className="specialforyou__container-text">
				<h2 className="specialforyou__title">Специально для вас</h2>
				<p className="specialforyou__subtitle">
					Мы разработали алгоритмы, которые создают индивидуальные подборки на
					основе ваших предпочтений. Войдите, чтобы увидеть персональные
					рекомендации.
				</p>
				<div className="specialforyou__button">
					<Button
						buttonText="Войти"
						handleButtonClick={handleButtonClick}
						type="button"
					/>
				</div>
			</div>
			<div className="specialforyou__container-img">
				<img className="specialforyou__image" alt="" src={films.imageUrl} />
				<img className="specialforyou__image" alt="" src={films2.imageUrl} />
			</div>
		</section>
	);
};
