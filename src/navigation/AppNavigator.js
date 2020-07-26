import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContainer from '../screen/Home';

const Stack = createStackNavigator();

AppNavigator = () => {
	return(	
		 <NavigationContainer>
		      <Stack.Navigator  screenOptions={{ headerShown : false }}>
		        <Stack.Screen name="Home" component={HomeContainer} />
		      </Stack.Navigator>
		 </NavigationContainer>
 )
}

export default AppNavigator;