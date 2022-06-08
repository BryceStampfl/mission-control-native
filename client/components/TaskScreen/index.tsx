import React from 'react';
import { Text, StyleSheet } from 'react-native';
import SearchBar from './SearchBar/index';
import TaskList from './TaskList/index';
import TaskFilters from './TaskFilters/index'
import { SafeAreaView } from 'react-native-safe-area-context';
import AddTask from './AddTask';
import Header from 'components/shared/Header';
import ScreenWrapper from 'components/shared/ScreenWrapper';


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
        <ScreenWrapper>
            <Header title={"Missions"} />
            <SearchBar onInput={onSearchText} />
            <AddTask />
            <TaskFilters filter={filter} onFilterChanged={onFilterChanged} />
            <TaskList filter={filter} searchText={searchText} />
        </ScreenWrapper>
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