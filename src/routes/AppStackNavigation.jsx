import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();
const AppStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
       <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
       
      </Stack.Navigator>
  )
}

export default AppStackNavigation

