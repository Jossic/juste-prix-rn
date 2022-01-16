import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';

const HistoryScreen = () => {
	const score = useSelector((state) => {
		// console.log(`state =>`, state);
		return state.settings.score;
	});

	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					<Text style={styles.textTitle}>Historique</Text>
					{score.length > 0 ? (
						<FlatList
							data={score}
							renderItem={({ item }) => (
								<View>
									<Text>
										{item.count} - {item.randomNum}
									</Text>
								</View>
							)}
							keyExtractor={(item) => item.id}
						/>
					) : (
						<Text style={styles.paraph}>
							Commencez par jouer votre première partie pour
							consulter votre historique
						</Text>
					)}
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
	textTitle: {
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
