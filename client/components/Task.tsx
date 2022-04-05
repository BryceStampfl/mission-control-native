import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Types {
    id: number,
    text: string,
}

const Task = ({id, text } : Types)  => {
    const [checked, setChecked] = React.useState(false);
    

    console.log(text);
    return (
        <View style={styles.container} >
             <BouncyCheckbox 
             onPress={(setChecked: boolean) => {}} 
             fillColor="blue"
             iconStyle={{borderColor: 'gray'}}
             />
    
            <Text>{text}</Text>
        </View>
    )
};

export default Task;

const styles = StyleSheet.create ({
    container:{
        width: (Dimensions.get('window').width) -20,
        
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