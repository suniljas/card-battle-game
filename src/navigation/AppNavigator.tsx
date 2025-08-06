import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CollectionScreen from '../screens/CollectionScreen';
import BattleScreen from '../screens/BattleScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Collection" component={CollectionScreen} />
      <Stack.Screen name="Battle" component={BattleScreen} />
    </Stack.Navigator>
  );
}
