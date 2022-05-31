import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ListItemStyle } from 'utils/styles/ListItemStyles'

const CalendarDay = ({nameOfDay, dayNumber}) => {
    return (
        <View style={ListItemStyle.basic}>
            <View style={styles.vertical}>
                <Text>
                    {nameOfDay}
                </Text>
                <Text>
                    {dayNumber}
                </Text>
            </View>
        </View>
    )
}
export default CalendarDay


const styles = StyleSheet.create({
    vertical: {
       flexDirection: 'column'
    },
})