import React from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';
import TaskList from './TaskList';
import TaskFilters from './TaskFilters'
import { SafeAreaView } from 'react-native-safe-area-context';

const TaskScreen = () => {
    const image = { uri: 'assets/SpaceBackground.jpg' };

    

    return (
        <ImageBackground source={require('../assets/SpaceBackground2.jpg')} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Missions</Text>
                <SearchBar />
                <TaskFilters />
            </SafeAreaView>

        </ImageBackground>
    )
}

export default TaskScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //backgroundColor: '#e9f8f8',
        paddingTop: 20,
        //  marginTop: 50,
        // marginBottom: 50,

    },
    header: {
        fontSize: 40,
        color: '#FFFFFF',
        alignSelf: 'center',

    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
    }

});

