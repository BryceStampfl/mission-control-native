import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'


const CalendarDay = ({nameOfDay, dayNumber}) => {
    console.log("Name of day is ",nameOfDay )
    return (
        <View style={styles.component}>
            <View>
                <Text>
                    {nameOfDay} {dayNumber}
                </Text>
            </View>
        </View>
    )
}
export default CalendarDay


const styles = StyleSheet.create({
    component: {
        flex: 1,
        backgroundColor: 'white',
        color: 'white',

        flexDirection: 'row',
        alignItems: 'center',

        height: 50,
        marginVertical: 5,
        borderWidth: 1,

        padding: 5,
        
        borderColor: '#808080',
        borderRadius: 7,
    },
})