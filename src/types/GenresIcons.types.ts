export interface IGenresIcons {
	id: number;
	title: string;
	slug: string;
	picture?: string;
}

export interface IGenresIconsState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	genresicons: Array<IGenresIcons>;
}
