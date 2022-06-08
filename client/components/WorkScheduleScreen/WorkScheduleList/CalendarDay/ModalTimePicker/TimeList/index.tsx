import React from 'react'
import { FlatList } from 'react-native'
import TimeListItem from './TimeListItem'

/**
 * @param {Array} list - Array containing either numbers(hours or minutes) or strings for period(AM/PM)
 * @param {function} updateData - Update either hours/minutes/period depending on return value in ModalTimePicker component
 */

interface Types {
    list: Array<number | string>
    updateData: any
}

const TimeList = ({ list, updateData }: Types) => {
    const [selected, setSelected] = React.useState(list[0])

    const updateSelected = (entry) => {
        setSelected(entry)
        updateData(entry)
    }

    const renderItem = ({ item }) => (
        <TimeListItem entry={item} currentSelected={selected == item ? true : false} updateSelected={updateSelected} />
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