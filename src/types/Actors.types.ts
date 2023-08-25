export interface IActors {
	id: number;
	name: string;
	last_name: string;
}

export interface IActorsState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	actors: Array<IActors>;
}
