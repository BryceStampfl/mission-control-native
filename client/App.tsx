
import React from 'react';
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from 'components/HomeScreen';
import TaskScreen from './components/TaskScreen';



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'planet-outline'
            } else if (route.name === 'TaskScreen') {
              iconName = 'list-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3AD2FF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false, }} />
        <Tab.Screen name="TaskScreen" component={TaskScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}



const Tab = createBottomTabNavigator();

