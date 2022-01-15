import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	Dimensions,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import Colors from '../constants/Colors';

const HomeScreen = () => {
	const [game, setGame] = useState(false);
	const [num, setNum] = useState();
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					<Image
						source={require('../assets/logo.png')}
						style={styles.image}
						resizeMode='contain'
					/>

					<Text>
						Retrouvez le juste prix entre{' '}
						<Text style={styles.orange}>0</Text> et{' '}
						<Text style={styles.orange}>1000</Text>.
					</Text>
					{game ? (
						// <TouchableOpacity
						// 	style={styles.button}
						// 	onPress={() => setGame(!game)}>
						// 	<Text style={{ color: 'white' }}>Commencer</Text>
						// </TouchableOpacity>
						<>
							<View style={styles.textPrice}>
								<Text style={{ color: 'white' }}>
									#1 Quel est le juste prix ?
								</Text>
							</View>

							<View style={styles.viewInput}>
								<TextInput
									style={styles.textInput}
									value={num}
									keyboardType='number-pad'
									onChangeText={setNum}
									textContentType='num'
									autoFocus={true}
								/>
								<Ionicons
									style={styles.arrow}
									name='arrow-forward-outline'
									size={35}
									color={Colors.secondary}
								/>
							</View>
						</>
					) : (
						<TouchableOpacity
							style={styles.button}
							onPress={() => setGame(!game)}>
							<Text style={{ color: 'white' }}>Commencer</Text>
						</TouchableOpacity>
					)}
				</View>
			</SafeAreaView>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 20,
		paddingBottom: 10,
	},
	textPrice: {
		color: 'white',
		backgroundColor: Colors.ternary,
		paddingVertical: 12,
		paddingHorizontal: 8,
		borderRadius: 5,
		marginTop: 20,
	},
	textInput: {
		color: 'black',
		paddingVertical: 9,
		paddingHorizontal: 5,
		borderRadius: 5,
		height: 45,
		width: Dimensions.get('window').width * 0.25,
	},
	viewInput: {
		marginTop: 20,
		backgroundColor: Colors.quaternary,
		flexDirection: 'row',
		borderColor: 'white',
		borderBottomColor: Colors.primary,
		borderStyle: 'solid',
		borderWidth: 3,
	},
	arrow: {
		paddingRight: 10,
		alignSelf: 'center',
	},
	image: {
		maxWidth: Dimensions.get('window').width * 0.5,
		height: Dimensions.get('window').height * 0.2,
	},
	button: {
		backgroundColor: Colors.primary,
		padding: 12,
		borderRadius: 5,
		marginTop: 40,
	},
	orange: {
		color: Colors.secondary,
	},
});
