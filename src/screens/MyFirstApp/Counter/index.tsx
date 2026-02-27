import { View, Text, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './Counter.styles';
import { incrementCounter, decrementCounter } from '../store/counterSlice';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state: any) => state.counter.value);

	return (
		<View style={styles.container}>
			<Pressable 
				style={styles.mainButton}
				onPress={() => dispatch(incrementCounter())}
			>
				<Text style={styles.mainButton_text}>+</Text>
			</Pressable>
			<Text style={styles.text}>{counter}</Text>
			<Pressable style={styles.mainButton}
				onPress={() => dispatch(decrementCounter())}
			>
				<Text style={styles.mainButton_text}>-</Text>
			</Pressable>
		</View>
	);		
};

export { Counter };