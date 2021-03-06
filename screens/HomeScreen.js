import React, { useState } from 'react';
import { useEffect } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import * as settingsActions from '../store/actions/settingsAction';
import Colors from '../constants/Colors';

const HomeScreen = () => {
	const settings = useSelector((state) => {
		return state.settings.settings;
	});
	const randomState = useSelector((state) => {
		// console.log(`state =>`, state);
		return state.settings;
	});
	// console.log(`randomState =>`, randomState);
	const [randomNum, setRandomNum] = useState(randomState.random);

	const dispatch = useDispatch();
	const [minimum, setMinimum] = useState(settings.minimum || 0);
	const [maximum, setMaximum] = useState(settings.maximum || 1000);
	const [game, setGame] = useState(false);
	const [num, setNum] = useState();
	const [displayPlusMoins, setDisplayPlusMoins] = useState({
		type: '',
		message: '',
	});
	const [count, setCount] = useState(0);

	useEffect(() => {
		setMinimum(settings.minimum);
		setMaximum(settings.maximum);
	}, [settings]);

	const startGame = () => {
		setGame(true);
		setCount(0);
		dispatch(settingsActions.startGame(minimum, maximum));
	};

	const tryNumber = () => {
		console.log(`randomState.random =>`, randomState.random);
		// console.log(`num =>`, typeof num);
		setDisplayPlusMoins('');
		if (num === randomState.random.toString()) {
			setCount((old) => old + 1);
			setDisplayPlusMoins({
				type: 'green',
				message: `Bravo !! ${count} coups`,
			});
			// Save info dans l'historique
			dispatch(settingsActions.saveData(count, randomState.random));
			setGame(false);
		} else if (num > randomState.random.toString()) {
			setCount((old) => old + 1);
			setDisplayPlusMoins({
				type: 'yellow',
				message: "C'est moins !",
			});
		} else if (num < randomState.random.toString()) {
			setCount((old) => old + 1);
			setDisplayPlusMoins({
				type: 'blue',
				message: "C'est plus !",
			});
		}
		setNum('');
	};

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
						<Text style={styles.orange}>{minimum}</Text> et{' '}
						<Text style={styles.orange}>{maximum}</Text>.
					</Text>
					{game ? (
						// <TouchableOpacity
						// 	style={styles.button}
						// 	onPress={() => setGame(!game)}>
						// 	<Text style={{ color: 'white' }}>Commencer</Text>
						// </TouchableOpacity>
						<>
							<TouchableOpacity onPress={() => setGame(!game)}>
								<View style={styles.textPrice}>
									<Text style={{ color: 'white' }}>
										#1 Quel est le juste prix ?
									</Text>
								</View>
							</TouchableOpacity>

							<View style={styles.viewInput}>
								<TextInput
									style={styles.textInput}
									value={num}
									keyboardType='number-pad'
									onChangeText={setNum}
									blurOnSubmit={false}
									onSubmitEditing={() => tryNumber()}
									onFocus={() => setNum()}
									textContentType='num'
									autoFocus={true}
								/>
								<TouchableOpacity onPress={() => tryNumber()}>
									<Ionicons
										style={styles.arrow}
										name='arrow-forward-outline'
										size={35}
										color={Colors.secondary}
									/>
								</TouchableOpacity>
							</View>
						</>
					) : (
						<TouchableOpacity
							style={styles.button}
							onPress={() => startGame()}>
							<Text style={{ color: 'white' }}>Commencer</Text>
						</TouchableOpacity>
					)}
					{displayPlusMoins.message ? (
						<View
							style={{
								...styles.alert,
								backgroundColor: displayPlusMoins.type,
							}}>
							<Text style={{ fontWeight: 'bold', fontSize: 20 }}>
								{displayPlusMoins.message}
							</Text>
						</View>
					) : (
						<Text>{''}</Text>
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
	alert: {
		marginTop: 20,
		paddingVertical: 9,
		paddingHorizontal: 5,
		borderRadius: 5,
		height: 45,
		width: Dimensions.get('window').width * 0.5,
		alignItems: 'center',
		justifyContent: 'center',
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
