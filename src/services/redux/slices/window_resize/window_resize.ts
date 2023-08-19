import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPage = createAsyncThunk(
	'@@window/page',
	async ({ page }: { page: number }) => {
		return { page };
	}
);

export const getScreenWidth = createAsyncThunk(
	'@@window/screenWidth',
	async ({ screenWidth }: { screenWidth: number }) => {
		return { screenWidth };
	}
);

const initialState = {
	page: 0,
	screenWidth: 0,
};

export const windowResize = createSlice({
	name: '@@window',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPage.fulfilled, (state, action) => {
				const { page } = action.payload;
				state.page = page;
			})
			.addCase(getScreenWidth.fulfilled, (state, action) => {
				const { screenWidth } = action.payload;
				state.screenWidth = screenWidth;
			});
	},
});

export const windowResizeReducer = windowResize.reducer;
