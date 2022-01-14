import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Redux
// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import placesReducer from './store/reducers/places';

// const rootReducer = combineReducers({
// places: placesReducer,
// products: productsReducer,
// });

// const store = createStore(rootReducer);

export default function App() {
	return (
		// <Provider store={store}>
		<AppNavigator />
		// </Provider>
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
