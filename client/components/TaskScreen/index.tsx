import React from 'react';

import ScreenWrapper from 'components/shared/ScreenWrapper';
import Header from 'components/shared/Header';
import SearchBar from './SearchBar/index';
import TaskFilters from './TaskFilters/index'
import TaskList from './TaskList/index';


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
            <TaskFilters filter={filter} onFilterChanged={onFilterChanged} />
            <TaskList filter={filter} searchText={searchText} />
        </ScreenWrapper>
    )
}
export default TaskScreen;