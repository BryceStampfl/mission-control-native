import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { ListItemStyle } from 'utils/styles/ListItemStyles'
import BouncyCheckbox from "react-native-bouncy-checkbox";

/**
 * @param {number} id - Task ID
 * @param {string} content - Summary of task
 * @param {boolean} finished - Boolean if task is completed to it can be styled differently
 * @param {function} updateFinishedStatus - Callback fn to TaskList to update finished if a task was pressed
 */

interface Types {
    id: number
    content: string
    finished: boolean
    updateFinishedStatus: any
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
            <View style={[ListItemStyle.basicExtraSmall, styles.flexRowAlignCenter, checked ? styles.inactive : styles.active]}>
                <BouncyCheckbox
                    ref={(ref: any) => (bouncyCheckboxRef = ref)}
                    isChecked={checked}
                    fillColor="blue"
                    iconStyle={{ borderColor: 'gray', borderRadius: 0 }}
                    disableBuiltInState={true}
                    onPress={() => taskPressed}
                />
                <Text style={checked ? styles.inactive : styles.active}>{content}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Task;

const styles = StyleSheet.create({
    active: {
        backgroundColor: 'white',
    },
    inactive: {
        textDecorationLine: 'line-through',
        backgroundColor: 'lightgray',
    },
    flexRowAlignCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})