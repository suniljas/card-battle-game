import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import DeckBuilderScreen from '../screens/DeckBuilderScreen';
import HeroCollectionScreen from '../screens/HeroCollectionScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="DeckBuilder" component={DeckBuilderScreen} />
        <Stack.Screen name="HeroCollection" component={HeroCollectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
