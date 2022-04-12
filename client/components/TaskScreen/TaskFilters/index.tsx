import React from 'react';

import { StyleSheet, View, Dimensions, FlatList } from 'react-native';
import Filter from './Filter';

import { filterData } from 'utils/Data.js';

const TaskFilters = ({ filter, onFilterChanged }) => {

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



const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('window').width) - 20,
        height: 40,
        backgroundColor: 'lightgray',

        marginBottom: 5,

        borderRadius: 7,
        borderWidth: 1,
    },
})