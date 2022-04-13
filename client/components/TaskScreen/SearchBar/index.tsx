import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onInput }) => {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text}
                onChangeText={onInput}
                placeholder='Search'
            >
            </TextInput>
        </View>
    )

}
export default SearchBar

const styles = StyleSheet.create({
    container: {
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