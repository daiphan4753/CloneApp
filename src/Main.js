import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { NativeScreenContainer } from 'react-native-screens';
import LoginScreen from './src/components/LoginScreen';
import RegisterScreen from './src/components/RegisterScreen';

const Stack = createNativeStackNavigator();
export default Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Register' component={RegisterScreen} options={{title: 'Đăng kí'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}