import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { ListItemStyle } from 'utils/styles/ListItemStyles';


const SearchBar = ({ onInput }) => {
    return (
        <View>
            <TextInput
                style={[ListItemStyle.basicMedium, styles.searchContainer]}
                onChangeText={onInput}
                placeholder='Search'
                placeholderTextColor={'#000'}
            >
            </TextInput>
        </View>
    )
}
export default SearchBar

const styles = StyleSheet.create({
    searchContainer: {
        //Height
        height: 40,
        //Spacing
        paddingLeft: 10,
    }
});