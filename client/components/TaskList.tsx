import React from 'react';
import { FlatList, View } from 'react-native'
import Task from './Task';

import { dataArray } from '../utils/DataArray';

const TaskList = () => {

    return (
        <View>
            <FlatList
                data={dataArray}
                renderItem={({ item }) => <Task id={item.id} text={item.text} />}
            />
        </View>
    )

}
export default TaskList;
