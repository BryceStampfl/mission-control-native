
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ImageBackground, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from '../HomeScreen';
import TaskScreen from '../TaskScreen';


const Navigation = () => {
    const imagePath =  '../../assets/SpaceBackground.jpg';

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
export default Navigation

const Tab = createBottomTabNavigator();

const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
    }

});