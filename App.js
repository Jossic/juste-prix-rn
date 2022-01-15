import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

//Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import settingsReducer from './store/reducers/settingsReducer';

const rootReducer = combineReducers({
	settings: settingsReducer,
});

const store = createStore(rootReducer);

export default function App() {
	return (
		<Provider store={store}>
			<AppNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
