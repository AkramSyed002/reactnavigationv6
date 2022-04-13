import { View, Text } from 'react-native'
import React from 'react'
import navigationStrings from '../constant/navigationStrings'
import TabsRoutes from './TabsRoutes';
import { ProductDetails, EditProfile, Search } from '../screens';

export default function MainStack(Stack) {
	return (
		<>
			<Stack.Screen name={navigationStrings.TABS} component={TabsRoutes} />
			{/* <Stack.Screen name={navigationStrings.PRODUCT_DETAILS} component={ProductDetails} />
			<Stack.Screen name={navigationStrings.EDIT_PROFILE} component={EditProfile} />
			<Stack.Screen name={navigationStrings.SEARCH} component={Search} /> */}
		</>
	)
}