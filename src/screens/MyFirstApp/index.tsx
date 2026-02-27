import { View, Text } from 'react-native';
import { styles } from './MyFirstApp.styles';
import { Provider } from 'react-redux';
import { store } from './store';
import { Counter } from './Counter';
import Notes from './Notes';

const MyFirstApp = () => {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<Text style={styles.headerText}>
					Мое первое приложение
				</Text>
				<Counter />
				<Notes />
			</View>
		</Provider>
	);
}

export { MyFirstApp };