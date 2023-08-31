export interface ICountries {
	id: number;
	title: string;
	slug: string;
}

export interface ICountriesState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	countries: ICountries[];
}
