import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';

/**
 * @param {object} - Can have any type of primatives or Components
 */

interface Types {
    props: {
        children: any
    }
}

const ScreenWrapper = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            {props.children}
        </SafeAreaView>
    )
}
export default ScreenWrapper;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 5,
    }
});