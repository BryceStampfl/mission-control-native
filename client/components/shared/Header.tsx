import React from 'react'
import { Text, StyleSheet } from 'react-native';

/**
 * @param {string} title- string representation of headers name
 */

interface Types {
    title: string
}

export const Header = ({ title }: Types) => {
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
    }
});