import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	Dimensions,
	TouchableHighlight,
	TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';

const HomeScreen = () => {
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
					<TouchableOpacity
						style={styles.button}
						onPress={() => console.log(`press`)}>
						<Text style={{ color: 'white' }}>Commencer</Text>
					</TouchableOpacity>
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
