import React from 'react';
import { View, Text, Button } from 'react-native'
import { ListItemStyle } from 'utils/styles/ListItemStyles';

import { Alert, Modal, Pressable } from "react-native";
import CustomTimePicker from './CustomTimePicker';


const OptionBar = () => {
    const [date, setDate] = React.useState(new Date())
    const [open, setOpen] = React.useState(false)

    const [modalVisible, setModalVisible] = React.useState(false);


    const closeModal = () => {
        setModalVisible(false)
    }

    return (
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
                <CustomTimePicker closeModal={closeModal}/>
            </Modal>

            <Pressable
                onPress={() => setModalVisible(true)}
            >
                <Text>Show Modal</Text>
            </Pressable>


        </View>

    )
}
export default OptionBar