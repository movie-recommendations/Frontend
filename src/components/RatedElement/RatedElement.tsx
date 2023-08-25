import './RatedElement.css';
import img_kinopoisk from '../../images/rated_kinopoisk.svg';
import img_imdb from '../../images/rated_imdb.svg';
import img_kinopoisk_inversion from '../../images/rated_kinopoisk_inversion.svg';

export const RatedElement = ({
	imdb,
	kinopoisk,
	isSearch,
}: {
	imdb: number;
	kinopoisk: number;
	isSearch: boolean;
}) => {
	return (
		<div className={`rated ${isSearch && 'rated_search'}`}>
			<div className="rated_row">
				<img
					className="rated_img"
					src={!isSearch ? img_kinopoisk : img_kinopoisk_inversion}
					alt="rated_kinopoisk"
				/>
				<div>{kinopoisk}</div>
			</div>
			<div className="rated_row">
				<img className="rated_img" src={img_imdb} alt="rated_imdb" />
				<div>{imdb}</div>
			</div>
		</div>
	);
};
