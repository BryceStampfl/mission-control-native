import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useMutation } from '@apollo/client';
import { POST_TASK } from 'utils/graphQlCalls'

import { ListItemStyle } from 'utils/styles/ListItemStyles';

const AddTask = () => {

    const [text, onChangeText] = React.useState('')
    const [postTask, { loading, error }] = useMutation(POST_TASK)

    const onPress = () => {
        postTask({ variables: { userId: 1, content: text } })
    }

    return (
        <View style={[styles.container]}>
            <TextInput style={styles.text}
                value={text}
                onChangeText={onChangeText}
            />
            <Button
                title="Submit"
                onPress={onPress}
            />
        </View>
    )
}
export default AddTask

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignSelf: 'stretch',
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
    }
});