import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Alert, Modal, Pressable } from "react-native";
import { ListItemStyle } from 'utils/styles/Style'
import ModalTimePicker from './ModalTimePicker';

/**
 * @param {string} nameOfDay - Name of day ~ Mon, Tue, Wed, ect
 * @param {number} dayNumber - Number corresponding to what day it is
 * @param {string} timeStart - Starting time for workday, format is strings: HH, MM, period
 * @param {string} timeEnd - Ending time for workday
 * @param {string} period - Whether or not the time specified is AM or PM
 * @param {function} updateWorkDaySchedule - Callback fn to WorkScheduleList to update workData array
 */


interface Types {
    props: {
        nameOfDay: string
        dayNumber: number
        timeStart: string
        timeEnd: string
        period: string
    }
    updateWorkDaySchedule: any
}

const CalendarDay = ({ props, updateWorkDaySchedule }: Types) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const closeModal = () => {
        setModalVisible(false)
    }

    const updatedModalTime = (time) => {
        updateWorkDaySchedule(time, props.dayNumber)
    }

    return (
        <Pressable onLongPress={() => setModalVisible(true)} >
            <View style={ListItemStyle.basicMedium}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <ModalTimePicker
                        closeModal={closeModal}
                        updateModalTime={updatedModalTime}
                    />
                </Modal>

                <View style={styles.container}>

                    <View style={styles.vertical}>
                        <Text>
                            {props.nameOfDay}
                        </Text>
                        <Text>
                            {props.dayNumber}
                        </Text>
                    </View>

                    <View style={styles.timeContainer}>
                        <Text>
                            {props.timeStart} - {props.timeEnd}
                        </Text>
                    </View>
                    <View>

                    </View>
                </View>
            </View>
        </Pressable>
    )
}
export default CalendarDay

const styles = StyleSheet.create({
    vertical: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    container: {
        flexDirection: 'row',
        height: '100%',
    },
    timeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
})