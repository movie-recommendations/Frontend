import './SearchResultPage.css';
import { useAppSelector } from 'src/services/typeHooks';
import { SeachResult } from 'src/components/SeachResult/SeachResult';
import { MoreButton } from 'src/components/MoreBtn/MoreButton';
import { useState, useEffect } from 'react';

export const SearchResultPage = () => {
	const films = useAppSelector((state) => state.films.films);
	const page = useAppSelector((state) => state.windowResize.page);
	const [isMoreButton, setIsMoreButton] = useState(false);
	const [pageMore, setPageMore] = useState(page);

	useEffect(() => {
		if (films.length > page) {
			setIsMoreButton(true);
		} else {
			setIsMoreButton(false);
		}
	}, [films, page]);

	const handleMoreButtonClick = () => {
		setPageMore((prev) => prev + page);
	};

	return (
		<section className="search-result">
			<h1 className="search-result_title">Результаты поиска</h1>
			<p className="search-result_subtitle">По запросу: ужасы</p>
			<div className="search-page_container">
				{films.slice(0, pageMore).map((film) => (
					<SeachResult film={film} />
				))}
			</div>
			<div className="flank_btn">
				{isMoreButton ? <MoreButton onClick={handleMoreButtonClick} /> : null}
			</div>
		</section>
	);
};
