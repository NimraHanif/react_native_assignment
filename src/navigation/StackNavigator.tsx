import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import DetailsScreen from '../screen/DetailsScreen';
import ProfileScreen from '../screen/ProfileScreen';
import UsersScreen from '../screen/UsersScreen';
import TestScreen from '../screen/TestScreen';
import LoginScreen from '../screen/LoginScreen';
const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Users" component={UsersScreen} />
      <Stack.Screen name="Test" component={TestScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;