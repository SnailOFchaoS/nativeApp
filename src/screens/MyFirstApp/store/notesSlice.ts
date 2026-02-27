import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

type Note = {
	id: number;
	text: string;
};

const notesSlice = createSlice({
	name: 'notes',
	initialState: [] as Note[],
	reducers: {
		addNote: (state, action: PayloadAction<string>) => {
			state.push({
				id: Date.now(),
				text: action.payload,
			});
		},
		deleteNote: (state, action: PayloadAction<number>) => {
			return state.filter((note) => note.id !== action.payload);
		},
	},
});

export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;