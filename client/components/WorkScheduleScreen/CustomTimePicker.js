import React from 'react'
import { View, FlatList, Text, StyleSheet, Button } from 'react-native'

const CustomTimePicker = ({ closeModal }) => {
    let hourList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const renderItem = ({ item }) => (
        <Text style={styles.textStyle}>
            {item}
        </Text>
    )

    return (
        <View style={[styles.modalContainer]}>
            <View style={styles.modalView}>
                <View style={styles.header}>
                    <Text style={styles.textStyle}>Time</Text>
                    <Button 
                        title={"X"}
                        onPress={closeModal}
                    />
                </View>

                <Text>{hourList.map(item => {
                    { item.id }
                })}</Text>

                <View style={styles.container}>
                    <FlatList
                        scrollEnabled={false}
                        style={styles.container2}
                        data={hourList}
                        renderItem={renderItem}
                    />
                    <FlatList
                        scrollEnabled={false}
                        style={styles.container2}
                        data={['00', '15', '30', '45']}
                        renderItem={renderItem}
                    />
                    <FlatList
                        scrollEnabled={false}
                        style={styles.container2}
                        data={['AM', 'PM']}
                        renderItem={renderItem}
                    />
                </View>
            </View>
        </View>
    )
}
export default CustomTimePicker

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",

    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})