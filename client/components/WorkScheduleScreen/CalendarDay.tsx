import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ListItemStyle } from 'utils/styles/ListItemStyles'

import { Alert, Modal, Pressable } from "react-native";
import CustomTimePicker from './ModalTimePicker/CustomTimePicker';


const CalendarDay = ({ props, updateWorkDay }) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const closeModal = () => {
        setModalVisible(false)
    }

    const updatedModalTime = (time) => {
        updateWorkDay(time, props.dayNumber)
    }

    return (
        <Pressable onLongPress={() => setModalVisible(true)} >
            <View style={ListItemStyle.basic}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <CustomTimePicker
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
        
    }
})