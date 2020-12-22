import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default function ChooseLevelScreen(props) {
	const { chooseLevel } = props;

	return (
		<View style={styles.container}>
			<Text> Choose your level </Text>
			<View style={styles.buttonsContainer}>
				<Button
					onPress={() => chooseLevel('easy')}
					title="Easy"
				/>
				<Button
					onPress={() => chooseLevel('medium')}
					title="Medium"
				/>
				<Button
					onPress={() => chooseLevel('hard')}
					title="Hard"
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 100,
	},
	buttonsContainer: {
		flexDirection: 'row',
		padding: 10,
	}
});
