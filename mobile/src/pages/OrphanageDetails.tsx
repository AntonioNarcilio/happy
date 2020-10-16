import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrphanagesDetails() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Detalhe do orfanato</Text>
		</View>
	);
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
    justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},

	text: {
		color: 'black',
		fontSize: 24,
		fontFamily: 'Nunito_700Bold',
	}
})