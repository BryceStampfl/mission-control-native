import React from 'react'
import { View, FlatList, Text, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native'

import TimeListItem from './TimeListItem'

const TimeList = ({ list, updateFn }) => {
    const [selected, setSelected] = React.useState(list[0])


    const updateSelected = (item) => {
        setSelected(item)
        console.log(item + " set to selected :(TimeListItem)")
    }

    const renderItem = ({ item }) => (
        <TimeListItem item={item} currentSelected={selected == item ? true: false} updateSelected={updateSelected} />
    )

    return (
        <FlatList
            scrollEnabled={false}
            data={list}
            keyExtractor={(item, index) => item}
            renderItem={renderItem}
        />
    )

}
export default TimeList