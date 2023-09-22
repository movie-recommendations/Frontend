import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import './SpecialForYou.css';
import { getFilmsApi } from '../../services/redux/slices/films/films';
import { FC } from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router';
import { useResize } from '../../hooks/useResize';

export const SpecialForYou: FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const films = useAppSelector((state) => state.movies.movies[5]);
	const films2 = useAppSelector((state) => state.movies.movies[0]);

	useEffect(() => {
		dispatch(getFilmsApi());
	}, []);

	function handleButtonClick() {
		navigate('/sign-in');
	}

	const { width, isBreakpoint } = useResize();

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
			{!isBreakpoint ? (
				<div className="specialforyou__container-img">
					<img className="specialforyou__image" alt="" src={films.h_picture} />
				</div>
			) : (
				<div className="specialforyou__container-img">
					<img className="specialforyou__image" alt="" src={films.h_picture} />
					<img className="specialforyou__image" alt="" src={films2.h_picture} />
				</div>
			)}
		</section>
	);
};
