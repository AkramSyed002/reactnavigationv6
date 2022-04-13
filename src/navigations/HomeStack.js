import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../constant/navigationStrings';
import { Home, ProductDetails } from '../screens';
const Stack = createNativeStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={navigationStrings.HOME_SCREEN} component={Home} />
			<Stack.Screen name={navigationStrings.PRODUCT_DETAILS} component={ProductDetails} />
		</Stack.Navigator>
	);
}