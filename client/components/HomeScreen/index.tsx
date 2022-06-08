import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * @param {object} navigation - Navigation object for React-Navigation with many properties
 */

interface Types {
    navigation: {
        navigate: any
    }
}

const HomeScreen = ({ navigation }: Types) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewContainer}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to TaskScreen"
                    onPress={() => navigation.navigate('TaskScreen')}
                />
            </View>
        </SafeAreaView>
    );
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
