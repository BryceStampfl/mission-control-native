import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

/**
 * @param {number} selectedTab - A number either 0 or 1 denoting the startTab(0) or the endTab(1) 
 * @param {function} onTabPressed - Callback fn to ModalTimePicker Component to change the tabs
 */

interface Types {
    selectedTab: number
    onTabPressed: any
}

const ModalTabHeader = ({ selectedTab, onTabPressed }: Types) => {

    return (
        <View style={styles.tabContainer}>
            <Text
                style={[styles.tabTextStyle, (selectedTab == 0) ? styles.tabUnderline : null]}
                onPress={() => onTabPressed(0)}
            >Start Time</Text>
            <Text
                style={[styles.tabTextStyle, (selectedTab == 1) ? styles.tabUnderline : null]}
                onPress={() => onTabPressed(1)}
            >End Time</Text>
        </View>
    )
}
export default ModalTabHeader

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center'
    },
    tabUnderline: {
        textDecorationLine: 'underline',
    },
    tabTextStyle: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 20,
    },
})