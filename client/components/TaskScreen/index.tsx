import React from 'react';
import ScreenWrapper from 'components/shared/ScreenWrapper';
import Header from 'components/shared/Header';
import SearchBar from './SearchBar/index';
import TaskFilters from './TaskFilters/index'
import TaskList from './TaskList/index';
import OptionsBar from './OptionsBar';

const TaskScreen = () => {

    const [filter, setFilter] = React.useState('All')
    const [searchText, setSearchText] = React.useState('')
    const [newTask, setNewTask] = React.useState(false)

    const setNewFilter = (filterName) => {
        setFilter(filterName)
    }

    const onSearchInput = (text) => {
        setSearchText(text)
    }

    return (
        <ScreenWrapper>
            <Header title={"Missions"} />
            <OptionsBar onSearchInput={onSearchInput} setNewTask={setNewTask}  />
            <TaskFilters activeFilter={filter} setNewFilter={setNewFilter} />
            <TaskList filter={filter} searchText={searchText} newTask={newTask} />
        </ScreenWrapper>
    )
}
export default TaskScreen;