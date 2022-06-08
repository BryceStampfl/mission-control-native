import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { ListItemStyle } from 'utils/styles/ListItemStyles';


/**
 * @param {function} onSearchInput - Callback fn to TaskScreen Component to update searchText 
 */

interface Types {
    onSearchInput: any
}

const SearchBar = ({ onSearchInput }: Types) => {
    return (
        <View>
            <TextInput
                style={[ListItemStyle.basicMedium, styles.searchContainer]}
                onChangeText={onSearchInput}
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