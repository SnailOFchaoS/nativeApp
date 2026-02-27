import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import notesSlice from './notesSlice';

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		notes: notesSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;