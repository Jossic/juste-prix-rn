import React from 'react';
import {
	Alert,
	Dimensions,
	Keyboard,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as settingsActions from '../store/actions/settingsAction';
import Colors from '../constants/Colors';
import { useState } from 'react';

const SettingsScreen = ({ navigation }) => {
	const settings = useSelector((state) => {
		return state.settings.settings;
	});
	const [minimum, setMinimum] = useState(settings.minimum);
	const [maximum, setMaximum] = useState(settings.maximum);

	const dispatch = useDispatch();

	const onSubmitHandler = () => {
		Keyboard.dismiss();
		dispatch(settingsActions.updateSettings({ minimum, maximum }));
		Alert.alert('SAUVEGARDE EFFECTUÉE', 'Vos données ont étés validées');
		navigation.navigate('Home');
	};

	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					<Text style={styles.textTitle}>Paramètres</Text>
					<View style={styles.card}>
						<View style={styles.inputView}>
							<Text style={{ color: 'white', marginBottom: 5 }}>
								Prix minimum
							</Text>
							<TextInput
								autoFocus
								style={styles.input}
								keyboardType='decimal-pad'
								onChangeText={setMinimum}
								value={minimum}
							/>
						</View>
						<View style={styles.inputView}>
							<Text style={{ color: 'white', marginBottom: 5 }}>
								Prix maximum
							</Text>
							<TextInput
								autoFocus
								style={styles.input}
								keyboardType='decimal-pad'
								onChangeText={setMaximum}
								value={maximum}
							/>
						</View>
					</View>
					<TouchableOpacity
						style={styles.button}
						onPress={() => onSubmitHandler()}>
						<Text style={{ color: 'white' }}>Sauvegarder</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default SettingsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 20,
		paddingBottom: 10,
	},
	card: {
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: Colors.ternary,
		width: Dimensions.get('window').width * 0.8,
		height: Dimensions.get('window').height * 0.22,
		padding: 20,
		paddingVertical: 25,
		borderRadius: 7,
	},
	input: {
		backgroundColor: 'white',
		width: Dimensions.get('window').width * 0.7,
		height: 30,
		paddingLeft: 5,
		borderRadius: 5,
	},
	textTitle: {
		color: Colors.primary,
		fontSize: 26,
		fontWeight: 'bold',
		marginBottom: 30,
	},
	button: {
		backgroundColor: Colors.primary,
		padding: 12,
		borderRadius: 5,
		marginTop: 40,
	},
});
