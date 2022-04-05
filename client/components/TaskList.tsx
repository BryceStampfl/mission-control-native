import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native'
import Task from './Task';

const TaskList = () => {

    const dataArray = [
        {
            id: 1,
            text: 'Mission One'
        },
        {
            id: 2,
            text: 'Mission Two'
        },
        {
            id: 3,
            text: 'Mission Three'
        },
        {
            id: 4,
            text: 'Mission Four'
        },
        {
            id: 5,
            text: 'Mission Five'
        },
        {
            id: 6,
            text: 'Mission Six'
        },];

    return (
        <View>
            <FlatList
                style={styles.container}
                data={dataArray}
                renderItem={({ item }) => <Task id={item.id} text={item.text} />}
            />
        </View>
    )

}
export default TaskList;

const styles = StyleSheet.create({
    container: {
       
    }

});