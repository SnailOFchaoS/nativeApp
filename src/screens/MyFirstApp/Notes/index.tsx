import { View, Text, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import { addNote, deleteNote } from '../store/notesSlice';
import { styles } from './Notes.styles';
import { useSelector, useDispatch } from 'react-redux';


const Notes = () => {
	const notes = useSelector((state: any) => state.notes);
	const [noteText, setNoteText] = useState('');
	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<View style={styles.inputLine}>
				<TextInput 
					style={styles.inputLine_input}
					value={noteText}
					onChangeText={setNoteText}
				/>
				<Pressable 
					style={styles.inputLine_button}
					onPress={() => dispatch(addNote(noteText))}
				>
					<Text style={styles.inputLine_button_text}>NewNote</Text>
				</Pressable>
			</View>
			{
				notes.map((note: any) => (
					<View 
						key={note.id}
						style={styles.note}
					>
						<Text>{note.text}</Text>
						<Pressable style={styles.note_button}>
							<Text 
								onPress={() => dispatch(deleteNote(note.id))}
								style={styles.note_button_text}
							>
								Delete
							</Text>
						</Pressable>
					</View>
				))
			}
		</View>
	);
}

export default Notes;