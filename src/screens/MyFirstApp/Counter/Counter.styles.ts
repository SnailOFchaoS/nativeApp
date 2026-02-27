import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		gap: 10,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 16,
	},
	mainButton: {
		width: 40,
		height: 40,
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
	},
	mainButton_text: {
		fontSize: 16,
		color: 'white',
		textAlign: 'center',
	},
})