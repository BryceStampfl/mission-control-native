import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ListItemStyle } from 'utils/styles/ListItemStyles'

import { Alert, Modal, Pressable } from "react-native";
import CustomTimePicker from './ModalTimePicker/CustomTimePicker';


const CalendarDay = ({ nameOfDay, dayNumber }) => {
    const [date, setDate] = React.useState(new Date())
    const [open, setOpen] = React.useState(false)
    
    const [modalVisible, setModalVisible] = React.useState(false);


    const closeModal = () => {
        setModalVisible(false)
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
                    <CustomTimePicker closeModal={closeModal} />
                </Modal>

                <View style={styles.vertical}>
                    <Text>
                        {nameOfDay}
                    </Text>
                    <Text>
                        {dayNumber}
                    </Text>
                </View>
                <View>

                </View>
            </View>
        </Pressable>
    )
}
export default CalendarDay


const styles = StyleSheet.create({
    vertical: {
        flexDirection: 'column'
    },
})