import React from 'react';
import { View, StyleSheet } from 'react-native'

import AddTask from '../AddTask';
import SearchBar from '../SearchBar';
import { ListItemStyle } from 'utils/styles/Style';

interface Types{ 
    onSearchInput: any
}

const OptionsBar = ({onSearchInput}: Types) => {
    return (
        <View style={[styles.container]}>
            <SearchBar onSearchInput={onSearchInput} />
            <AddTask />
        </View>
    )
}
export default OptionsBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
})
