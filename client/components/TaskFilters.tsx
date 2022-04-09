import React from 'react';

import { StyleSheet, View, Text, TouchableNativeFeedback, Dimensions, FlatList } from 'react-native';
import { filterData } from '../utils/Data';

const TaskFilters = ({filter, onFilterChanged}) => {

    return (
        <View style={styles.container}>
            <FlatList
                horizontal={true}
                data={filterData}
                renderItem={({ item }) => (
                    <Filter
                        title={item.title}
                        activeFilter={filter}
                        onFilterPress={onFilterChanged}
                    />
                )}
            />
        </View>)
}
export default TaskFilters


const Filter = ({ title, activeFilter, onFilterPress }) => {

    return (
        <TouchableNativeFeedback onPress={() => onFilterPress(title)}>
            <View style={[styles.button, activeFilter == title ? styles.active : styles.inactive]}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableNativeFeedback>)
}


const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('window').width) - 20,
        height: 40,
        backgroundColor: 'lightgray',

        marginBottom: 5,

        borderRadius: 7,
        borderWidth: 1,
    },

    active: {
        backgroundColor: '#FFF',
        borderRadius: 7,
        borderWidth: 1,
        height: '100%',

    },
    inactive: {
        borderRadius: 0,

    },
    button: {
        width: ((Dimensions.get('window').width) - 20) / 3,
        justifyContent: 'center',
        padding: 2,

    },
    text: {
        textAlign: 'center',
    },

})