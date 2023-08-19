import { ISelect } from 'src/types/Film.types';

export const getSelections = (): ISelect[] => {
	// return fetchData(`${API_URL}/signin`, data);

	const podborki: ISelect[] = [
		{
			id: 1,
			title: 'Red hot',
			description: 'holy super hit',
			movie: [
				{
					id: 106,
					title: 'Вечное сияние чистого разума',
					rating: {
						kinopoisk: 7.6,
						imdb: 7.6,
					},
					shortDescription: 'спецоперации по поиску оружия талибов...',
					imageUrl: 'https://hkcinema.ru/foto/271ba85f.jpg',
					movieCardUrl: 'https://kinotochka.ru/movie/106',
					index: 6,
					year: 2023,
					genres: ['Хоррор', 'Драмма', 'Вымысел', 'Ясновидинее'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
				{
					id: 104,
					title: 'Пролетая над гнездом кукушки',
					rating: {
						kinopoisk: 7.4,
						imdb: 7.4,
					},
					shortDescription: 'март 2018 года. тся...',
					imageUrl:
						'https://i0.wp.com/www.henneth-annun.ru/wp-content/uploads/2014/07/Hobbit_3_Horizontal_Teaser.jpg?ssl=1',
					movieCardUrl: 'https://kinotochka.ru/movie/104',
					index: 4,
					year: 2023,
					genres: ['Хоррор', 'Эротика'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
				{
					id: 103,
					title: 'Синичка',
					rating: {
						kinopoisk: 7.3,
						imdb: 7.3,
					},
					shortDescription: 'В живых остаются...',
					imageUrl:
						'https://s.ekabu.ru/localStorage/post/86/0e/04/68/860e0468.jpg',
					movieCardUrl: 'https://kinotochka.ru/movie/103',
					index: 3,
					year: 2023,
					genres: ['Комедия', 'Драмма'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
			],
		},
		{
			id: 2,
			title: 'Красная ягода протестует',
			description: 'Хотите, расскажу вам сказку как Дед...',
			movie: [
				{
					id: 103,
					title: 'Синичка',
					rating: {
						kinopoisk: 7.3,
						imdb: 7.3,
					},
					shortDescription: 'В живых остаются...',
					imageUrl:
						'https://s.ekabu.ru/localStorage/post/86/0e/04/68/860e0468.jpg',
					movieCardUrl: 'https://kinotochka.ru/movie/103',
					index: 3,
					year: 2023,
					genres: ['Комедия', 'Драмма'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
				{
					id: 101,
					title: 'Абра кадабра',
					rating: {
						kinopoisk: 7.1,
						imdb: 7.1,
					},
					shortDescription:
						'Афганистан, март 2018 года. Во время спецоперации по поиску оружия талибов отряд сержанта армии США Джона Кинли попадает в засаду. В живых остаются...',
					imageUrl:
						'https://in-rating.ru/space/wp-content/uploads/2023/03/Les-trois-mousquetaires-DArtagnan-9-1200.jpg',
					movieCardUrl: 'https://kinotochka.ru/movie/101',
					index: 1,
					year: 2023,
					genres: ['Хоррор', 'Драмма', 'Превосходство'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
				{
					id: 106,
					title: 'Вечное сияние чистого разума',
					rating: {
						kinopoisk: 7.6,
						imdb: 7.6,
					},
					shortDescription: 'спецоперации по поиску оружия талибов...',
					imageUrl: 'https://hkcinema.ru/foto/271ba85f.jpg',
					movieCardUrl: 'https://kinotochka.ru/movie/106',
					index: 6,
					year: 2023,
					genres: ['Хоррор', 'Драмма', 'Вымысел', 'Ясновидинее'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
			],
		},
		{
			id: 3,
			title: 'Новогодняя',
			description: 'Лучшая подборка для просмотра зимним, семейным, вечером',
			movie: [
				{
					id: 102,
					title: 'Переводчик',
					rating: {
						kinopoisk: 7.2,
						imdb: 7.2,
					},
					shortDescription:
						'Во время спецоперации по поиску оружия талибов отряд сержанта армии США Джона Кинли попадает в засаду. В живых остаются...',
					imageUrl:
						'https://anime-fans.ru/wp-content/uploads/2022/05/Magicheskaya-Bitva-Glava-184-Rezyume-Spojlery-Prevyu.jpg',
					movieCardUrl: 'https://kinotochka.ru/movie/102',
					index: 2,
					year: 2023,
					genres: ['Хоррор', 'Сюреализм'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
				{
					id: 103,
					title: 'Синичка',
					rating: {
						kinopoisk: 7.3,
						imdb: 7.3,
					},
					shortDescription: 'В живых остаются...',
					imageUrl:
						'https://s.ekabu.ru/localStorage/post/86/0e/04/68/860e0468.jpg',
					movieCardUrl: 'https://kinotochka.ru/movie/103',
					index: 3,
					year: 2023,
					genres: ['Комедия', 'Драмма'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
				{
					id: 105,
					title: 'Конь',
					rating: {
						kinopoisk: 7.5,
						imdb: 7.5,
					},
					shortDescription: 'отряд сержанта армии США...',
					imageUrl:
						'https://media.kg-portal.ru/movies/c/captainamerica2/posters/captainamerica2_32.jpg',
					movieCardUrl: 'https://kinotochka.ru/movie/105',
					index: 5,
					year: 2023,
					genres: ['Исторический', 'Драмма'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
			],
		},
		{
			id: 4,
			title: 'Ржавые Апельсины',
			description: 'По другой — название появилось от слова «самородок»',
			movie: [
				{
					id: 106,
					title: 'Вечное сияние чистого разума',
					rating: {
						kinopoisk: 7.6,
						imdb: 7.6,
					},
					shortDescription: 'спецоперации по поиску оружия талибов...',
					imageUrl:
						'https://avatars.mds.yandex.net/get-kinopoisk-post-img/2423210/7fa2da18c626025b4d6ea388030a682d/960',
					movieCardUrl: 'https://kinotochka.ru/movie/106',
					index: 6,
					year: 2023,
					genres: ['Хоррор', 'Драмма', 'Вымысел', 'Ясновидинее'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
				{
					id: 104,
					title: 'Пролетая над гнездом кукушки',
					rating: {
						kinopoisk: 7.4,
						imdb: 7.4,
					},
					shortDescription: 'март 2018 года. тся...',
					imageUrl:
						'https://i0.wp.com/www.henneth-annun.ru/wp-content/uploads/2014/07/Hobbit_3_Horizontal_Teaser.jpg?ssl=1',
					movieCardUrl: 'https://kinotochka.ru/movie/104',
					index: 4,
					year: 2023,
					genres: ['Хоррор', 'Эротика'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
				{
					id: 103,
					title: 'Синичка',
					rating: {
						kinopoisk: 7.3,
						imdb: 7.3,
					},
					shortDescription: 'В живых остаются...',
					imageUrl:
						'https://s.ekabu.ru/localStorage/post/86/0e/04/68/860e0468.jpg',
					movieCardUrl: 'https://kinotochka.ru/movie/103',
					index: 3,
					year: 2023,
					genres: ['Комедия', 'Драмма'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
			],
		},
		{
			id: 5,
			title: 'Кино Почка',
			description: 'Изображения могут быть защищены авторским правом',
			movie: [
				{
					id: 106,
					title: 'Вечное сияние чистого разума',
					rating: {
						kinopoisk: 7.6,
						imdb: 7.6,
					},
					shortDescription: 'спецоперации по поиску оружия талибов...',
					imageUrl:
						'https://xage.ru/media/uploads/2008/2/posteryi-luchshih-filmov-poluchivshih-oskar/posteryi-luchshih-filmov-poluchivshih-oskar_1.jpg',
					movieCardUrl: 'https://kinotochka.ru/movie/106',
					index: 6,
					year: 2023,
					genres: ['Хоррор', 'Драмма', 'Вымысел', 'Ясновидинее'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
				{
					id: 104,
					title: 'Пролетая над гнездом кукушки',
					rating: {
						kinopoisk: 7.4,
						imdb: 7.4,
					},
					shortDescription: 'март 2018 года. тся...',
					imageUrl:
						'https://i0.wp.com/www.henneth-annun.ru/wp-content/uploads/2014/07/Hobbit_3_Horizontal_Teaser.jpg?ssl=1',
					movieCardUrl: 'https://kinotochka.ru/movie/104',
					index: 4,
					year: 2023,
					genres: ['Хоррор', 'Эротика'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
				{
					id: 103,
					title: 'Синичка',
					rating: {
						kinopoisk: 7.3,
						imdb: 7.3,
					},
					shortDescription: 'В живых остаются...',
					imageUrl:
						'https://s.ekabu.ru/localStorage/post/86/0e/04/68/860e0468.jpg',
					movieCardUrl: 'https://kinotochka.ru/movie/103',
					index: 3,
					year: 2023,
					genres: ['Комедия', 'Драмма'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
			],
		},
		{
			id: 6,
			title: 'Смородина',
			description:
				'Употребление ягод смородины опосредованно влияет на улучшение микроциркуляции в области органов',
			movie: [
				{
					id: 106,
					title: 'Вечное сияние чистого разума',
					rating: {
						kinopoisk: 7.6,
						imdb: 7.6,
					},
					shortDescription: 'спецоперации по поиску оружия талибов...',
					imageUrl:
						'https://i.pinimg.com/236x/4f/8d/e1/4f8de1ec6a7a0b90350b3796aaa6762d.jpg',
					movieCardUrl: 'https://kinotochka.ru/movie/106',
					index: 6,
					year: 2023,
					genres: ['Хоррор', 'Драмма', 'Вымысел', 'Ясновидинее'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
				{
					id: 104,
					title: 'Пролетая над гнездом кукушки',
					rating: {
						kinopoisk: 7.4,
						imdb: 7.4,
					},
					shortDescription: 'март 2018 года. тся...',
					imageUrl:
						'https://i0.wp.com/www.henneth-annun.ru/wp-content/uploads/2014/07/Hobbit_3_Horizontal_Teaser.jpg?ssl=1',
					movieCardUrl: 'https://kinotochka.ru/movie/104',
					index: 4,
					year: 2023,
					genres: ['Хоррор', 'Эротика'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
				{
					id: 103,
					title: 'Синичка',
					rating: {
						kinopoisk: 7.3,
						imdb: 7.3,
					},
					shortDescription: 'В живых остаются...',
					imageUrl:
						'https://s.ekabu.ru/localStorage/post/86/0e/04/68/860e0468.jpg',
					movieCardUrl: 'https://kinotochka.ru/movie/103',
					index: 3,
					year: 2023,
					genres: ['Комедия', 'Драмма'],
					country: ['Россия', 'США'],
					director: [
						{
							first_name: 'Алексей',
							last_name: 'Балабанов',
						},
						{
							first_name: 'Квентин',
							last_name: 'Тарантино',
						},
						{
							first_name: 'Quentin',
							last_name: 'Tarantino',
						},
					],
					actor: [
						{
							first_name: 'Сергей',
							last_name: 'Бодров',
						},
						{
							first_name: 'Tom',
							last_name: 'Cruise',
						},
						{
							first_name: 'Джефф',
							last_name: 'Бриджес',
						},
					],
					is_favorite: false,
					must_see: false,
					is_viewed: false,
				},
			],
		},
	];

	return podborki;
};
