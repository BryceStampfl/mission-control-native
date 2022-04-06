import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Types {
    id: number,
    text: string,
}

const Task = ({ id, text }: Types) => {
    let bouncyCheckboxRef: BouncyCheckbox | null = null;
    const [checked, setChecked] = React.useState(false);

    const taskPressed = () => {
        setChecked(!checked)
        bouncyCheckboxRef?.onPress()
    }

    return (
        <TouchableWithoutFeedback onPress={taskPressed}>
            <View style={styles.container} >
                <BouncyCheckbox
                    ref={(ref: any) => (bouncyCheckboxRef = ref)}
                    isChecked={checked}
                    fillColor="blue"
                    iconStyle={{ borderColor: 'gray' }}
                />
                <Text>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
};



export default Task;

const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('window').width) - 20,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',

        borderColor: '#808080',
        borderRadius: 7,
        color: '#808080',

        height: 50,
        marginVertical: 5,
        borderWidth: 1,
        padding: 5,

    },

})
