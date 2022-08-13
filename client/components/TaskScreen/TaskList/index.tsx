import React from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import Task from './Task';
import { graphQlToObjects } from 'utils/util';

import { useQuery } from '@apollo/client';
import { GET_TASKS } from 'utils/graphQlCalls';

/**
 * @param {string} filter - Currentl filter being applied
 * @param {string} searchText - Text currently being searched
 */

interface Types {
    filter: string
    searchText: string
}

const TaskList = ({ filter, searchText }: Types) => {

    const [missionData, setMissionData] = React.useState([]);

    const { loading, error, data } = useQuery(GET_TASKS, {
        onCompleted: (data) => setMissionData(graphQlToObjects(data["getTasksById"])),
        variables: { userId: 1 }
    })

    /**
     * @param id 
     * @returns Array updated with Task pressed to change finished value
     */
    const handlePress = (id: number) => {
        let tempArray = [...missionData]
        let index = tempArray.findIndex(item => item.id == id);
        let tempElement = { ...tempArray[index] }

        tempElement.finished = !(tempElement.finished)
        tempArray[index] = tempElement;
        setMissionData(tempArray);
    }


    /**
     * 
     * @returns array filtered by current filter and searchtext
     */
    const getFilterData = () => {
        let filteredArray = missionData;

        if (searchText == null || searchText != '') {
            filteredArray = missionData.filter(element => element.content.includes(searchText))
        }

        if (filter == 'All') return filteredArray
        else if (filter == 'Active') {
            filteredArray = missionData.filter(element => element.finished == false)

        }
        else if (filter == 'Completed') {
            filteredArray = missionData.filter(element => element.finished == true)
        }
        return filteredArray;
    }

    if (loading) {
        return (
            <View style={{ height: '70%' }}>
                <ActivityIndicator
                    style={{ flex: 1 }}
                    size={'large'}
                    color={'#FFFFF'}
                />
            </View>
        )
    }

    return (
        <View style={{ marginBottom: useBottomTabBarHeight() + 45 }}>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={getFilterData()}
                renderItem={({ item }) =>
                    <Task
                        id={item.id}
                        content={item.content}
                        finished={item.finished}
                        updateFinishedStatus={handlePress}
                    />}
            />
        </View>
    )
}
export default TaskList;