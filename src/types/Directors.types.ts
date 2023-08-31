export interface IDirectors {
	id: number;
	name: string;
	last_name: string;
}

export interface IDirectorsState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	directors: Array<IDirectors>;
}
