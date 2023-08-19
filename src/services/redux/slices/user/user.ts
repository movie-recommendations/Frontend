import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCheckEmail, fetchSignIn, fetchSignUp } from './userApi';
import { IUser, ISignInData, ISignUpData } from 'src/types/Auth.types';

export interface IUserState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: unknown;
	user: IUser;
}

export const signInUser = createAsyncThunk(
	'@@user/signIn',
	async (data: ISignInData, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchSignIn(data);
			const json = await response.json();
			return fulfillWithValue(json);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const checkEmail = createAsyncThunk(
	'@@user/checkEmail',
	async (data: string, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchCheckEmail(data);
			return fulfillWithValue(response);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const signUpUser = createAsyncThunk(
	'@@user/signUp',
	async (data: ISignUpData, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchSignUp(data);
			return fulfillWithValue(response);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

const initialState: IUserState = {
	status: 'idle',
	error: '',
	user: { token: '', email: '', fav_genres: [] },
};

const userSlice = createSlice({
	name: '@@user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		signOut: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(signInUser.fulfilled, (state, action: PayloadAction<string>) => {
				state.status = 'success';
				state.user.token = action.payload;
			})
			.addCase(checkEmail.fulfilled, (state) => {
				state.status = 'success';
			})
			.addCase(signUpUser.fulfilled, (state) => {
				state.status = 'success';
			})
			.addMatcher(
				(action) => action.type.endsWith('/pending'),
				(state) => {
					state.status = 'loading';
					state.error = '';
				}
			)
			.addMatcher(
				(action) => action.type.endsWith('/rejected'),
				(state, action) => {
					state.status = 'failed';
					state.error = action.payload.statusText;
				}
			);
	},
});

export const { setUser, signOut } = userSlice.actions;

export const userReducer = userSlice.reducer;

export const selectUser = (state: { user: IUserState }) => state.user.user;
