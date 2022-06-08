import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'

/**
 * @param {number | string} entry - Number or string entry for hour/minute/period list
 * @param {boolean} currentlySelected - True/False is entry is currently selected
 * @param {function} updateSelected - Callback fn to TimeList component to update selected item and data
 */

interface Types {
    entry: number | string
    currentSelected: boolean
    updateSelected: any
}

const TimeListItem = ({ entry, currentSelected, updateSelected }: Types) => {

    const itemPressed = () => {
        updateSelected(entry)
    }

    return (
        <TouchableWithoutFeedback onPress={itemPressed}>
            <View style={currentSelected ? styles.active : styles.inactive}>
                <Text style={styles.textStyle}>
                    {entry}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default TimeListItem

const styles = StyleSheet.create({
    active: {
        backgroundColor: '#90ee90',
        borderRadius: 25,
    },
    inactive: {},
    textStyle: {
        fontSize: 30,
        textAlign: 'center'
    },
})