export interface IAvatars {
	id: number;
	avatar: string;
}

export interface IAvatarsState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	images: Array<IAvatars>;
}
