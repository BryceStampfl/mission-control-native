import React from 'react';
import { FlatList, View } from 'react-native'
import Task from './Task';

import { missionData } from '../utils/Data.js';

const TaskList = ({ filter }) => {
    console.log('Filter is ' + filter)

    const handlePress = (id: number) => {
        missionData.map((element) => {
            if (element.id == id) element.finished = !element.finished;
        })
    }

    function getFilterData() {
        if (filter == 'All') return missionData
        else if (filter == 'Active') {
             return missionData.filter(element => element.finished == false)
        }
        else if (filter == 'Completed') {
            return missionData.filter(element => element.finished == true)
        }
    }


    return (
        <View>
            <FlatList
                data={getFilterData()}
                renderItem={({ item }) => <Task id={item.id} text={item.text} finished={item.finished} updateFinishedStatus={handlePress} />}
            />
        </View>
    )
}
export default TaskList;

