import React from 'react'
import Login from '../LoginPage/Login';
import Register from '../RegisterPage/Register';
import Home from "../Home/Home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function Welcome() {
  return (
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default Welcome