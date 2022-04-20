import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const imagePath = '../../assets/SpaceBackground.jpg';


const HomeScreen = ({ navigation }) => {

    return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
});