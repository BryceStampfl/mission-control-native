import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const TabHeader = ({ selectedTab, onTabPressed }) => {

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
export default TabHeader

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