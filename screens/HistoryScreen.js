import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const HistoryScreen = () => {
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					<Text style={styles.histo}>Historique</Text>
					<Text style={styles.paraph}>
						Commencez par jouer votre première partie pour consulter
						votre historique
					</Text>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default HistoryScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 20,
		paddingBottom: 10,
	},
	histo: {
		color: Colors.primary,
		fontSize: 26,
		fontWeight: 'bold',
		marginBottom: 30,
	},
	paraph: {
		fontSize: 18,
		color: 'black',
		textAlign: 'center',
	},
});
