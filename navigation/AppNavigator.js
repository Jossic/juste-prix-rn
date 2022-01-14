import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppTabNavigator } from './Navigators';

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<AppTabNavigator />
		</NavigationContainer>
	);
};

export default AppNavigator;
