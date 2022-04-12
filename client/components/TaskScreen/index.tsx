import React from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';
import SearchBar from './SearchBar/index';
import TaskList from './TaskList/index';
import TaskFilters from './TaskFilters/index'
import { SafeAreaView } from 'react-native-safe-area-context';

const TaskScreen = () => {
    const imagePath =  '../../assets/SpaceBackground.jpg';

    const [filter, setFiter] = React.useState('All')

    const onFilterChanged = (filterName) => {
        setFiter(filterName)
    }

    return (
        <ImageBackground source={require('../../assets/SpaceBackground.jpg')} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Missions</Text>
                <SearchBar />
                <TaskFilters filter={filter} onFilterChanged={onFilterChanged} />
                <TaskList filter={filter}/>
            </SafeAreaView>

        </ImageBackground>
    )
}

export default TaskScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,

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