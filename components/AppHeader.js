import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppHeader = props => {
	return (
		<View style={styles.header}>
			<Text>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 40,
		paddingTop: 10,
		backgroundColor: '#F4D03F',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default AppHeader;
