import { createSlice } from '@reduxjs/toolkit';
import { IStoreState } from './types';

let attempts = 0;

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		authorised: false,
		attempts
	},
	reducers: {
		codeHasBeenValidated: (state: IStoreState, { payload: { authorised } }) => ({
			authorised,
			attempts: ++attempts
		})
	},
});


export const { codeHasBeenValidated } = authSlice.actions;

export default authSlice.reducer;