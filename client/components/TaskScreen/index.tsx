import React from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';
import SearchBar from './SearchBar/index';
import TaskList from './TaskList/index';
import TaskFilters from './TaskFilters/index'
import { SafeAreaView } from 'react-native-safe-area-context';


const TaskScreen = () => {

    const [filter, setFiter] = React.useState('All')
    const [searchText, setSearchText] = React.useState('')

    const onFilterChanged = (filterName) => {
        setFiter(filterName)
    }
    
    const onSearchText = (text) => {
        setSearchText(text)
    }

    return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Missions</Text>
                <SearchBar onInput={onSearchText}/>
                <TaskFilters filter={filter} onFilterChanged={onFilterChanged} />
                <TaskList filter={filter} searchText={searchText}/>
            </SafeAreaView>
    )
}

export default TaskScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        fontSize: 40,
        color: '#FFFFFF',
        alignSelf: 'center',
    },
});