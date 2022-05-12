import React from 'react';
import { FlatList, View, Text, Button } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import Task from './Task';

import { useQuery } from '@apollo/client';
import { GET_TASKS } from 'utils/graphQlCalls';


const TaskList = ({ filter, searchText }) => {

    const { loading, error, data } = useQuery(GET_TASKS, {
        onCompleted: (data) => setWriteableData(data["getTasksById"]),
        variables: { userId: 1 }
    })

    const [missionData, setMissionData] = React.useState([]);


    const setWriteableData = (data) => {
        let readableArray = []
        data.map(obj => {
            let newObj = {}
            for (let i = 1; i < Object.keys(obj).length; i++) {
                    newObj[Object.keys(obj)[i]] = Object.values(obj)[i]
            }
            readableArray.push(newObj);
        })
        setMissionData(readableArray)
    }

    const handlePress = (id: number) => {
        let tempArray = [...missionData]
        let index = tempArray.findIndex(item => item.id == id );
        let tempElement = {...tempArray[index]}

        tempElement.finished = !(tempElement.finished)
        tempArray[index] = tempElement;
        setMissionData(tempArray);
    }

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
    
    if(loading) return <Text>Loading</Text>

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