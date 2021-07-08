import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home.js';
import Cities from './components/Cities';
import Places from './components/Places';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Cities"
            component={Cities}
          />
          <Stack.Screen
            name="Places"
            component={Places}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

