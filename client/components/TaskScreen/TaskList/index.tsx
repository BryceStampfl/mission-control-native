import React from 'react';
import { FlatList, View } from 'react-native'
import Task from './Task';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import {missionData}  from 'utils/Data';



const TaskList = ({ filter, searchText }) => {

    const handlePress = (id: number) => {
        missionData.map((element) => {
            if (element.id == id) element.finished = !element.finished;
        })
    }

    function getFilterData() {
        let dataArray = missionData;
        
        if (searchText == null || searchText != ''){
            dataArray = dataArray.filter(element => element.text.includes(searchText))
        }

        if (filter == 'All') return dataArray
        else if (filter == 'Active') {
             dataArray = dataArray.filter(element => element.finished == false)
        }
        else if (filter == 'Completed') {
            dataArray = dataArray.filter(element => element.finished == true)
        }

        return dataArray;
    }

    const bottomTabHeight = useBottomTabBarHeight();


    return (
        <View style={{marginBottom: useBottomTabBarHeight() + 45}}>
            <FlatList
                data={getFilterData()}
                renderItem={({ item }) => <Task id={item.id} text={item.text} finished={item.finished} updateFinishedStatus={handlePress} />}
            />
        </View>
    )
}
export default TaskList;
