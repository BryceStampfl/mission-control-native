import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { ListItemStyle } from 'utils/styles/Style';


const WelcomeBanner = () => {

return(
    <View style={[ListItemStyle.basicMedium, styles.container]}>
        <Text style={[styles.text]}>
            Welcome to mission headquarters!
        </Text>
    </View>
)

}
export default WelcomeBanner

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    },
})