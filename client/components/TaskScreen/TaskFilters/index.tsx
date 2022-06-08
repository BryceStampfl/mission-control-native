import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Filter from './Filter';

/**
 * @param {string} activeFilter - Currently selected Filter
 * @param {function} setNewFilter - Callback to TaskScreen Component to update the new Filter if pressed in Filter Component
 */

interface Types {
    activeFilter: string
    setNewFilter: any
}

const TaskFilters = ({ activeFilter, setNewFilter }: Types) => {

    const filterData = [{ name: 'All' }, { name: 'Active' }, { name: 'Completed' }];

    return (
        <View style={styles.container}>
            <FlatList
                horizontal={true}
                data={filterData}
                renderItem={({ item }) => (
                    <Filter
                        name={item.name}
                        activeFilter={activeFilter}
                        setNewFilter={setNewFilter}
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