import React from 'react';
import { View, StyleSheet } from 'react-native'

import AddTask from '../AddTask';
import SearchBar from '../SearchBar';
import { ListItemStyle } from 'utils/styles/ListItemStyles';



const OptionsBar = (onSearchInput) => {
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
