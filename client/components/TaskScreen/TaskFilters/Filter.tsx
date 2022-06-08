import React from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet, Dimensions } from 'react-native'

/**
 * @param {string} name - Name of filter - All, Active, or Completed
 * @param {string} activeFilter - Current filter being applied
 * @param {function} setNewFilter - Callback to TaskScreen Component to update the new Filter if pressed in Filter Component
 */

interface Types {
    name: string
    activeFilter: string
    setNewFilter: any
}

const Filter = ({ name, activeFilter, setNewFilter }: Types) => {

    return (
        <TouchableNativeFeedback onPress={() => setNewFilter(name)}>
            <View style={[styles.button, activeFilter == name ? styles.active : styles.inactive]}>
                <Text style={styles.alignCenter}>{name}</Text>
            </View>
        </TouchableNativeFeedback>)
}
export default Filter


const styles = StyleSheet.create({
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
    },
    alignCenter: {
        textAlign: 'center',
    },
})