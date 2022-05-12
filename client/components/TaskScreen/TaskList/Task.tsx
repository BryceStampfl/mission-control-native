import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";


interface Types {
    id: number,
    content: string,
    finished: boolean,
    updateFinishedStatus: any,
}

const Task = ({ id, content, finished, updateFinishedStatus }: Types) => {
    let bouncyCheckboxRef: BouncyCheckbox | null = null;
    const [checked, setChecked] = React.useState(finished);

    const taskPressed = () => {
        setChecked(!checked)
        bouncyCheckboxRef?.onPress()
        updateFinishedStatus(id)
    }

    return (
        <TouchableWithoutFeedback onPress={taskPressed}>
            <View style={[styles.button, checked ? styles.inactive: styles.active]}>
                <BouncyCheckbox
                    ref={(ref: any) => (bouncyCheckboxRef = ref)}
                    isChecked={checked}
                    fillColor="blue"
                    iconStyle={{ borderColor: 'gray' }}
                />
                <Text style={checked ? styles.inactive: styles.active}>{content}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
};


export default Task;

const styles = StyleSheet.create({
    active: {
        backgroundColor: 'white',
    },
    inactive: {
        textDecorationLine: 'line-through',
        backgroundColor: 'lightgray',
    },
    button:{
        
        width: (Dimensions.get('window').width) - 20,

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