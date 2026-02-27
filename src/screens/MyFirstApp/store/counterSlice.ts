import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
	},
	reducers: {
		incrementCounter: (state) => {
			state.value += 1;
		},
		decrementCounter: (state) => {
			state.value -= 1;
		},
	},
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;
export default counterSlice.reducer;