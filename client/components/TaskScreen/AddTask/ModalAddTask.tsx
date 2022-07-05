import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'



interface Types {
    closeModal: any
    updateFn: any
}

const ModalAddTask = ({closeModal, updateFn}: Types) => {
    const [text, onChangeText] = React.useState('')

    const onModalClosed = () => {
        updateFn(text);
        closeModal();
    }

    return (
        <View style={[styles.modalWrapper]}>
            <View style={styles.modalView}>
                <View style={styles.header}>
                    <Text>Header</Text>
                    <Button
                        title={"Quit"}
                        onPress={closeModal}
                    />
                </View>

                <View style={styles.modalContainer}>
                    <View >
                        <TextInput
                            style={[styles.text, {width: 300}]}
                            value={text}
                            onChangeText={onChangeText}
                        />
                    </View>
                    <Button
                        title="Submit"
                        onPress={onModalClosed}
                    />
                </View>
            </View>
        </View >
    )

}
export default ModalAddTask

const styles = StyleSheet.create({
    modalWrapper: {
        flex: 1,
        justifyContent: "center",
    },
    modalContainer: {
        backgroundColor: "white",
        flexDirection: 'column',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    text: {
        backgroundColor: '#FFF',
        borderColor: '#808080',
        borderRadius: 7,
        color: 'black',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})