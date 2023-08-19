export enum FlanksTypes {
	ratedFilms = 'ratedFilms',
	willSee = 'willSee',
	favorites = 'favorites',
	collections = 'collections',
}

export interface IFlanks {
	formName: FlanksTypes;
}
