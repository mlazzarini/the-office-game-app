import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Image, Button, Alert, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import AppHeader from './components/AppHeader';
import { useRandomImage } from './hooks/useRandomImage';
import ChooseLevelScreen from './components/ChooseLevelScreen';
import GameOverScreen from './components/GameOverScreen';

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	const [level, setLevel] = useState(null);
	const [userInput, setUserInput] = useState('');
	const gameImages = useRandomImage(level);
	const [nrCurrentImage, setNrCurrentImage] = useState(0);
	const roundsNumber = useRef(0);
	const correctAnswers = useRef(0);

	const loadFonts = () => {
		return Font.loadAsync({
			'oswald': require('./assets/fonts/Oswald-Regular.ttf'),
		});
	};

	if (!fontsLoaded) {
		return <AppLoading startAsync={loadFonts} onFinish={() => setFontsLoaded(true)} onError={err => console.log(err)} />;
	}

	const checkSolution = () => {
		const currentImage = gameImages[nrCurrentImage];
		if (userInput.toLowerCase() === currentImage.name) {
			correctAnswers.current = correctAnswers.current + 1;
		}
		roundsNumber.current = roundsNumber.current + 1;
		setNrCurrentImage(nr => nr + 1);
		setUserInput('');
	};

	const getContent = () => {
		if (!level)
			return <ChooseLevelScreen chooseLevel={setLevel} />;
		if (roundsNumber.current === 5)
			return <GameOverScreen roundsNumber={roundsNumber.current} correctAnswers={correctAnswers.current} />;
		const currentImage = gameImages[nrCurrentImage];
		if (currentImage)
			return (<ScrollView>
				<Image source={currentImage.src} style={styles.image} />
				<TextInput
					style={styles.userInput}
					onChangeText={setUserInput}
					value={userInput}
				//onSubmitEditing={checkSolution}
				/>
				<Button
					onPress={checkSolution}
					title="Submit"
				/>
				<StatusBar style="auto" />
			</ScrollView>);
	};

	return (
		<View style={styles.root}>
			<AppHeader title="The Office Game" />
			<View style={styles.container}>
				{getContent()}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		fontFamily: 'oswald',
	},
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 100,
	},
	image: {
		width: 200,
		height: 200,
		marginTop: 10,
	},
	userInput: {
		width: 200,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginTop: 10,
		padding: 10,
	},
});
