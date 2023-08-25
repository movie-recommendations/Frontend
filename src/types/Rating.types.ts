export interface IRating {
	id: number;
	user: number;
	movie: number;
	rate: number;
	is_viewed: boolean;
	must_see: boolean;
	is_favorite: boolean;
}

export interface IRatingState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	movie_rating: IRating[];
}

export interface IRate {
	rate: number;
}


export enum ButtonTypes {
	seen = 'seen',
	willSee = 'willSee',
	favorites = 'favorites',
}

export interface IButton {
	buttonName: ButtonTypes;
	id: number;
}

export interface IImage {
	imageUrl: string;
}

export interface ActorsListProps {
	actors: string[];
}
export interface PopupTrailerProps {
	isPopupOpen: boolean;
	switchPopupTrailer: () => void;
}

export enum SlickSliderTypes {
	news = 'news',
	specialforyou = 'specialforyou',
	similar = 'similar',
	redactionOne = 'redactionOne',
	redactionTwo = 'redactionTwo',
	redactionThree = 'redactionThree',
}

export interface ISlider {
	type: SlickSliderTypes;
}
