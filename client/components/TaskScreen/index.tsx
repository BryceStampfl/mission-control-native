import React from 'react';
import ScreenWrapper from 'components/shared/ScreenWrapper';
import Header from 'components/shared/Header';
import SearchBar from './SearchBar/index';
import TaskFilters from './TaskFilters/index'
import TaskList from './TaskList/index';


const TaskScreen = () => {

    const [filter, setFilter] = React.useState('All')
    const [searchText, setSearchText] = React.useState('')

    const setNewFilter = (filterName) => {
        setFilter(filterName)
    }

    const onSearchInput = (text) => {
        setSearchText(text)
    }

    return (
        <ScreenWrapper>
            <Header title={"Missions"} />
            <SearchBar onSearchInput={onSearchInput} />
            <TaskFilters activeFilter={filter} setNewFilter={setNewFilter} />
            <TaskList filter={filter} searchText={searchText} />
        </ScreenWrapper>
    )
}
export default TaskScreen;