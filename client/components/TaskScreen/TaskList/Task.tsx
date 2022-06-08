import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { ListItemStyle } from 'utils/styles/ListItemStyles'
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
            <View style={[ListItemStyle.basicExtraSmall ,styles.flexRowAlignCenter, checked ? styles.inactive: styles.active]}>
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
    flexRowAlignCenter:{
        flexDirection: 'row',
        alignItems: 'center',
    },
})