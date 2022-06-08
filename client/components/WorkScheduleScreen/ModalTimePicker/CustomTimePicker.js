import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import TimeList from './TimeList';
import TabHeader from './TabHeader';

const CustomTimePicker = ({ closeModal, updateModalTime }) => {

    const [selectedTab, setSelectedTab] = React.useState(0)
    const [data, setData] = React.useState({
        start: { hour: hourList[0], minute: minuteList[0], period: periodList[0] },
        end: { hour: hourList[0], minute: minuteList[0], period: periodList[0] }
    })

    const onTabPressed = (tabNumber) => setSelectedTab(tabNumber)

    const onModalClosed = () => {
        updateModalTime(data)
        closeModal()
    }

    const updateData = (timeData) => {
        let startTab = (selectedTab == 0 ? true : false)
        if (hourList.includes(timeData)) {
            if (startTab) { setData({ ...data, start: { ...data.start, hour: timeData } }) }
            else { setData({ ...data, end: { ...data.end, hour: timeData } }) }
        }
        else if (minuteList.includes(timeData)) {
            if (startTab) { setData({ ...data, start: { ...data.start, minute: timeData } }) }
            else { setData({ ...data, end: { ...data.end, minute: timeData } }) }
        }
        else {
            if (startTab) { setData({ ...data, start: { ...data.start, period: timeData } }) }
            else { setData({ ...data, end: { ...data.end, period: timeData } }) }
        }
    }

    return (
        <View style={[styles.modalWrapper]}>
            <View style={styles.modalView}>
                <View style={styles.header}>
                    <TabHeader
                        selectedTab={selectedTab}
                        onTabPressed={onTabPressed} />
                    <Button
                        title={"Quit"}
                        onPress={closeModal}
                    />
                </View>

                <View style={[styles.modalContainer, (selectedTab == 1) ? styles.hide : null]}>
                    <TimeList list={hourList.concat()} updateFn={updateData} />
                    <TimeList list={minuteList} updateFn={updateData} />
                    <TimeList list={periodList} updateFn={updateData} />
                </View>
                <View style={[styles.modalContainer, (selectedTab == 0) ? styles.hide : null]}>
                    <TimeList list={hourList} updateFn={updateData} />
                    <TimeList list={minuteList} updateFn={updateData} />
                    <TimeList list={periodList} updateFn={updateData} />
                </View>
                <Button
                    title='Submit'
                    onPress={onModalClosed}
                />
            </View>
        </View>
    )
}
export default CustomTimePicker


const hourList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const minuteList = ["00", "15", "30", "45"];
const periodList = ["AM", "PM"];

const styles = StyleSheet.create({
    hide: {
        display: 'none'
    },
    tabContainer: {
        flexDirection: 'row'
    },
    modalWrapper: {
        flex: 1,
        justifyContent: "center",
    },
    modalContainer: {
        flexDirection: 'row',
        alignItems: 'center',

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