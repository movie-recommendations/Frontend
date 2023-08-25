import { IRating } from 'src/types/Rating.types';

export const getRating = (): IRating => {
	// return fetchData(`${API_URL}/signin`, data);

	const mymovie = {
		id: 1,
		user: 3,
		movie: 1,
		rate: 6.4,
		is_viewed: false,
		must_see: true,
		is_favorite: true,
	};

	return mymovie;
};



