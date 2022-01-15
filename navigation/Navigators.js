import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import HistoryScreen from '../screens/HistoryScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

export const AppTabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'Home') {
						iconName = focused
							? 'game-controller'
							: 'game-controller-outline';
					} else if (route.name === 'Historique') {
						iconName = focused ? 'beer' : 'beer-outline';
					} else if (route.name === 'Paramètres') {
						iconName = focused ? 'settings' : 'settings-outline';
					}
					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
			})}
			tabBarOptions={{
				activeTintColor: Colors.primary,
				// inactiveTintColor: Color.primaryFaded,
			}}>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name='Historique'
				component={HistoryScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name='Paramètres'
				component={SettingsScreen}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
};
