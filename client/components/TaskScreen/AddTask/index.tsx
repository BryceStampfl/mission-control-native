import React from 'react';
import { View, Text, StyleSheet, Alert, Modal, Pressable } from 'react-native';

import { useMutation } from '@apollo/client';
import { POST_TASK } from 'utils/graphQlCalls'

import { ListItemStyle } from 'utils/styles/ListItemStyles';
import ModalAddTask from './ModalAddTask';

// TODO: Make into a modal #29

const AddTask = () => {

    const [postTask, { loading, error }] = useMutation(POST_TASK)

    const [modalVisible, setModalVisible] = React.useState(false);

    const closeModal = () => {
        setModalVisible(false)
    }

    const updateAddTask = (newTask) => {
        postTask({ variables: { userId: 1, content: newTask } })
    }

    return (
        <Pressable onPress={() => setModalVisible(true)} >
            {/* <View> */}
            < View style={[styles.container, ListItemStyle.basicStyle]} >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <ModalAddTask
                        closeModal={closeModal}
                        updateFn={updateAddTask}
                    />
                </Modal>
                <View >
                    <Text style={styles.text}>+</Text>
                </View>
            </View >
        </Pressable >
    )
}
export default AddTask

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        width: 50,
    },
    text: {
        textAlign: 'center'
    }
});