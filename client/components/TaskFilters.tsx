import React from 'react';

import { StyleSheet, View, Text, TouchableNativeFeedback, Dimensions } from 'react-native';


const TaskFilters = () => {

    const buttonPress = (title) => {
        console.log(title);
    }

    return (
        <View style={styles.container}>
            <Filter
                title='All'
                onPress={buttonPress}
                active={true}
            />
            <Filter
                title='Active'
                onPress={buttonPress}
                active={false}
            />
            <Filter
                title='Completed'
                onPress={buttonPress}
                active={false}
            />
        </View>)
}
export default TaskFilters


const Filter = ({ title, onPress, active }) => {


    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={[styles.button, active ? styles.active : styles.inactive]}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableNativeFeedback>)
}


const styles = StyleSheet.create({
    container: {

        width: (Dimensions.get('window').width) - 20,
        height: 40,
        backgroundColor: 'lightgray',
        
        display: 'flex',
        flexDirection: 'row',

        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'red',

        alignItems: 'center',
    },
    active: {
        backgroundColor: '#FFF',
        borderRadius: 7,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',

    },
    inactive: {
        borderRadius: 0,
        
    },
    button: {
 
        flex: 1,
        padding: 2,

        borderLeftWidth: 1,

        borderColor: 'green',

    },
    text: {
        textAlign: 'center',
    }


})


