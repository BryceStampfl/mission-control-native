import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { useQuery } from '@apollo/client';
import { GET_TASKS } from 'utils/graphQlCalls';
import { Style } from 'utils/styles/Style';
import { graphQlToObjects } from 'utils/util';

const TasksInfoSquare = () => {

    const { loading, error, data } = useQuery(GET_TASKS, {
        variables: { userId: 1 }
    });

    let unfinishedTasks = 0;
    let finishedTasks = 0;

    if (data && !loading) {
        let dataArray = graphQlToObjects(data['getTasksById'])

        dataArray.forEach((element => {
            (element.finished == true ? finishedTasks++ : unfinishedTasks++);

        }))

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
        <View style={[Style.basic, styles.container]}>
            <Text style={styles.text}>
                Tasks left: {unfinishedTasks}
            </Text>
            <Text style={styles.text}>
                Finished: {finishedTasks}
            </Text>
        </View>
    )
}
export default TasksInfoSquare;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        height: 120,
        width: 140,
        padding: 10,
        margin: 5,

    },
    text: {
        fontSize: 17,
        textAlign: 'center',
    }
})