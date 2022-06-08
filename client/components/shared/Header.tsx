import React from 'react'
import { Text, StyleSheet } from 'react-native';

export const Header = ({ title }) => {
    return (
        <Text style={styles.header}>{title}</Text>
    )
}
export default Header;

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        color: '#FFFFFF',
        alignSelf: 'center',
    },
});