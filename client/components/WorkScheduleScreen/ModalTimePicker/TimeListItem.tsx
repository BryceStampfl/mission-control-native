import React from 'react'
import { View, FlatList, Text, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native'



const TimeListItem = ({ item, currentSelected, updateSelected }) => {

    const itemPressed = () => {
        updateSelected(item)
    }

    return (
        <TouchableWithoutFeedback onPress={itemPressed}>
            <View style={currentSelected?  styles.active : styles.inactive}>
                <Text style={styles.textStyle}>
                    {item}
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