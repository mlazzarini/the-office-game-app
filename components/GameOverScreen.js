import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default function GameOverScreen(props) {
	const { correctAnswers, roundsNumber } = props;

	return (
		<View style={styles.container}>
			<Text> Game over! </Text>
			<Text>You gave {correctAnswers} correct answers over {roundsNumber}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 100,
	},
});
