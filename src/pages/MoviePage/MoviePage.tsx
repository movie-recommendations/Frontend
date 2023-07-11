import './MoviePage.css';
// import pic from "../../images/123.jpg";
// import icon from "../../images/Icon.svg";
//

function MoviePage() {
	return (
		<section className="moviepage">
			<div className="movie-block">
				<img
					className="movie-block__img"
					alt=""
					// src={pic}
				/>
				<div className="movie-block__text">
					<h2 className="movie-block__text_title">Переводчик</h2>
					<p className="movie-block__text_year">2022</p>
					<p className="movie-block__text_subtitle">
						Афганистан, март 2018 года. Во время спецоперации по поиску оружия
						талибов отряд сержанта армии США Джона Кинли попадает в засаду. В
						живых остаются только сам Джон, получивший ранение, и местный
						переводчик Ахмед, который сотрудничает с американцами. Очнувшись на
						родине, Кинли не помнит, как ему удалось выжить, но понимает, что
						именно Ахмед спас ему жизнь, протащив на себе через опасную
						территорию. Теперь чувство вины не даёт Джону покоя, и он решает
						вернуться за Ахмедом и его семьёй, которых в Афганистане усиленно
						ищут талибы.
					</p>
				</div>
				<div className="movie-block__rating">
					<p>10</p>
				</div>
			</div>
			<button className="moviepage__button">
				<img
					className="moviepage__button_img"
					alt=""
					// src={icon}
				/>
				Смотреть трейлер
			</button>
		</section>
	);
}

export default MoviePage;
