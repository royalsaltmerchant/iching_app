import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Oracle from './src/scenes/Oracle'
import Hexagrams from './src/scenes/Hexagrams'
import SingleHexagram from './src/scenes/SingleHexagram'

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function hexagramHome() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Hexagrams" component={Hexagrams} />
      <Stack.Screen name="SingleHexagram" component={SingleHexagram} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Oracle') {
              iconName = focused
                ? 'contrast'
                : 'contrast';
            } else if (route.name === 'Hexagrams') {
              iconName = focused ? 'book' : 'book';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'purple',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Oracle" component={Oracle} />
        <Tab.Screen name="Hexagrams" component={hexagramHome} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
