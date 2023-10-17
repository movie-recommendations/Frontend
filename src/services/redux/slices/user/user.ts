import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	fetchCheckEmail,
	fetchDeleteUser,
	fetchEditAvatar,
	fetchEditFavGenres,
	fetchEditUserInfo,
	fetchGetRecomendations,
	fetchGetUserInfo,
	fetchPasswordRecovery,
	fetchResetPassword,
	fetchSignIn,
	fetchSignUp,
} from './userApi';
import {
	IUser,
	ISignInData,
	ISignUpData,
	IResetPasswordData,
	IEditProfileData,
} from 'src/types/Auth.types';

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
			return fulfillWithValue(json.access);
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
			const responseData = { status: response.status, ok: response.ok };
			return fulfillWithValue(responseData);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const recoverPassword = createAsyncThunk(
	'@@user/recoverPassword',
	async (data: string, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchPasswordRecovery(data);
			const responseData = { status: response.status, ok: response.ok };
			return fulfillWithValue(responseData);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const resetPassword = createAsyncThunk(
	'@@user/resetPassword',
	async (data: IResetPasswordData, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchResetPassword(data);
			const responseData = { status: response.status, ok: response.ok };
			return fulfillWithValue(responseData);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const getUserInfo = createAsyncThunk(
	'@@user/getUserInfo',
	async (token: string, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchGetUserInfo(token);
			const json = await response.json();
			return fulfillWithValue(json);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const getRecomendations = createAsyncThunk(
	'@@user/getRecomendations',
	async (token: string, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchGetRecomendations(token);
			const json = await response.json();
			return fulfillWithValue(json);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const editUserInfo = createAsyncThunk(
	'@@user/editUserInfo',
	async (
		arg: {
			data: IEditProfileData;
			token: string;
		},
		{ fulfillWithValue, rejectWithValue }
	) => {
		const { data, token } = arg;
		try {
			const response = await fetchEditUserInfo(data, token);
			const json = await response.json();
			return fulfillWithValue(json);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const editFavGenres = createAsyncThunk(
	'@@user/editFavGenres',
	async (
		arg: { data: { fav_genres: number[] }; token: string },
		{ fulfillWithValue, rejectWithValue }
	) => {
		const { data, token } = arg;
		try {
			const response = await fetchEditFavGenres(data, token);
			const json = await response.json();
			return fulfillWithValue(json);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const editAvatars = createAsyncThunk(
	'@@user/editAvatars',
	async (
		arg: { data: { avatar: number }; token: string },
		{ fulfillWithValue, rejectWithValue }
	) => {
		const { data, token } = arg;
		try {
			const response = await fetchEditAvatar(data, token);
			const json = await response.json();
			return fulfillWithValue(json);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const deleteUser = createAsyncThunk(
	'@@user/deleteUser',
	async (token: string, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchDeleteUser(token);
			const responseData = { status: response.status, ok: response.ok };
			return fulfillWithValue(responseData);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

const initialState: IUserState = {
	status: 'idle',
	error: null,
	user: {
		email: '',
		token: '',
		fav_genres: [],
		nickname: undefined,
		dateOfBirth: undefined,
		sex: undefined,
		avatar: 0,
		recomendations: [
			{
				id: 0,
				title: '',
				v_picture: '',
				h_picture: '',
				rating: {
					rate_imdb: 0,
					rate_kinopoisk: 0,
				},
				year: 0,
				genres: [''],
				is_favorite: false,
				is_need_see: false,
			},
		],
	},
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
			.addCase(recoverPassword.fulfilled, (state) => {
				state.status = 'success';
			})
			.addCase(resetPassword.fulfilled, (state) => {
				state.status = 'success';
			})
			.addCase(getUserInfo.fulfilled, (state, action) => {
				state.status = 'success';
				state.user.nickname = action.payload.username;
				state.user.dateOfBirth = action.payload.date_of_birth;
				state.user.sex = action.payload.sex;
				state.user.fav_genres = action.payload.fav_genres;
				state.user.avatar = action.payload.avatar;
			})
			.addCase(getRecomendations.fulfilled, (state, action) => {
				state.status = 'success';
				state.user.recomendations = action.payload.recomendations;
			})
			.addCase(editUserInfo.fulfilled, (state, action) => {
				state.status = 'success';
				state.user.nickname = action.payload.username;
				state.user.dateOfBirth = action.payload.date_of_birth;
				state.user.sex = action.payload.sex;
			})
			.addCase(editFavGenres.fulfilled, (state, action) => {
				state.status = 'success';
				state.user.fav_genres = action.payload.fav_genres;
			})
			.addCase(editAvatars.fulfilled, (state, action) => {
				state.status = 'success';
				state.user.avatar = action.payload.avatar;
			})
			.addCase(deleteUser.fulfilled, () => initialState)
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
export const selectUserStatus = (state: { user: IUserState }) =>
	state.user.status;
