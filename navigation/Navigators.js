import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/HistoryScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function AppTabNavigator() {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Home' component={HomeScreen} />
			<Tab.Screen name='Historique' component={HistoryScreen} />
			<Tab.Screen name='Paramètres' component={SettingsScreen} />
		</Tab.Navigator>
	);
}
