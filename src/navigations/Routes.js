import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Explore, Home, Profile } from '../screens';
import navigationStrings from '../constant/navigationStrings';
import MainStack from './MainStack';
const Stack = createNativeStackNavigator();

export default function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{MainStack(Stack)}
			</Stack.Navigator>
			{/* <Stack.Navigator initialRouteName={navigationStrings.HOME_SCREEN}
			// screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name={navigationStrings.HOME_SCREEN} component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name={navigationStrings.PROFILE_SCREEN} component={Profile} options={{ headerShown: false }} />
				<Stack.Screen name={navigationStrings.EXPLORE_SCREEN} component={Explore} options={{ title: 'This is Title' }} />
			</Stack.Navigator> */}
		</NavigationContainer>
	);
}