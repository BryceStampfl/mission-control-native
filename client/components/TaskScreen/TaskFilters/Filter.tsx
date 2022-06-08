import React from 'react'
import { TouchableNativeFeedback, View, Text, StyleSheet, Dimensions } from 'react-native'

const Filter = ({ title, activeFilter, onFilterPress }) => {

    return (
        <TouchableNativeFeedback onPress={() => onFilterPress(title)}>
            <View style={[styles.button, activeFilter == title ? styles.active : styles.inactive]}>
                <Text style={styles.alignCenter}>{title}</Text>
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