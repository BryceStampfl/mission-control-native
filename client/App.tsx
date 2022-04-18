
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from 'components/HomeScreen';
import TaskScreen from './components/TaskScreen';


const imagePath = './assets/SpaceBackground.jpg';


export default function App() {
  return (
    <ImageBackground source={require(imagePath)} resizeMode="cover" style={styles.image}>
      <NavigationContainer theme={navTheme}>
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
    </ImageBackground>

  );
}

const Tab = createBottomTabNavigator();


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
  }

});

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};