import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Explore, Home, ProductDetails, Profile } from '../screens';
import navigationStrings from '../constant/navigationStrings';
import { Image } from 'react-native';
import iconPath from '../constant/iconPath';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import ExploreStack from './ExploreStack';
import ProfileStack from './ProfileStack';
const Tab = createBottomTabNavigator();




export default function TabsRoutes() {
	return (
		<Tab.Navigator initialRouteName={HomeStack}
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: 'red',
				tabBarInactiveTintColor: 'gray',
				tabBarStyle: {
					// backgroundColor: 'yellow',
					borderRadius: 20,
					backgroundColor: 'transparent',
				}
			}}
		>
			{tabs.map((tab, index) => (
				<Tab.Screen name={tab.name} component={tab.component} key={index}
					options={{
						tabBarShowLabel: false, tabBarIcon: ({ focused }) => {
							return <Image source={tab.icon}
								style={{ width: 20, height: 20, tintColor: focused ? 'red' : 'gray' }}
							/>
						},
					}}
				/>

			))}
			{/* <Tab.Screen name={navigationStrings.HOME_SCREEN} component={Home}
				options={{ tabBarShowLabel: true, tabBarIcon: ({ focused }) => { return <Image source={iconPath.iconHome} style={style} /> } }}
			/>
			<Tab.Screen name={navigationStrings.EXPLORE_SCREEN} component={Explore} options={{
				// title: 'This is Title',
				tabBarShowLabel: true,
				tabBarIcon: ({ focused }) => <Image source={iconPath.iconExplore} style={style} />
			}} />
			<Tab.Screen name={navigationStrings.PROFILE_SCREEN} component={Profile} options={{ headerShown: false, tabBarIcon: ({ focused }) => <Image source={iconPath.iconProfile} style={style} /> }} /> */}
		</Tab.Navigator>
	);
}
const style = {
	width: 20,
	height: 20

}


const tabs = [
	{ name: navigationStrings.HOME_SCREEN, component: HomeStack, icon: iconPath.iconHome },
	{ name: navigationStrings.EXPLORE_SCREEN, component: ExploreStack, icon: iconPath.iconExplore },
	{ name: navigationStrings.PROFILE_SCREEN, component: ProfileStack, icon: iconPath.iconProfile },
]