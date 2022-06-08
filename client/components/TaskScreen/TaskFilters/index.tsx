import React from 'react';
import { StyleSheet, View, Dimensions, FlatList } from 'react-native';
import Filter from './Filter';


const TaskFilters = ({ filter, onFilterChanged }) => {

    const filterData = [{ title: 'All' }, { title: 'Active' }, { title: 'Completed' }];

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
        </View>
    )
}
export default TaskFilters

const styles = StyleSheet.create({
    container: {
        //Height
        height: 40,

        //Color
        backgroundColor: 'lightgray',

        //Margin
        marginBottom: 5,

        //Border
        borderRadius: 7,
        borderWidth: 1,
    },
})