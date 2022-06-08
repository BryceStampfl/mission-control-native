import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import TabHeader from './ModalTabHeader';
import TimeList from './TimeList';

/**
 * @param {function} closeModal - Closes the Modal and returns back to WorkScheduleList component
 * @param {function} updateModalTime - Callback fn to CalendarDay to call updateWorkDaySchedule with the new
 *         time schedule and also appends the day number to the returned object to updateWorkDaySchedule
 */

interface Types {
    closeModal: any
    updateModalTime: any
}

const ModalTimePicker = ({ closeModal, updateModalTime }: Types) => {

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

    /**
     * 
     * @param timeData - New time schedule that is changed into an object with start{} and end{} properties within it
     */
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
                    <TimeList list={hourList.concat()} updateData={updateData} />
                    <TimeList list={minuteList} updateData={updateData} />
                    <TimeList list={periodList} updateData={updateData} />
                </View>
                <View style={[styles.modalContainer, (selectedTab == 0) ? styles.hide : null]}>
                    <TimeList list={hourList} updateData={updateData} />
                    <TimeList list={minuteList} updateData={updateData} />
                    <TimeList list={periodList} updateData={updateData} />
                </View>
                <Button
                    title='Submit'
                    onPress={onModalClosed}
                />
            </View>
        </View>
    )
}
export default ModalTimePicker;


const hourList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const minuteList = ["00", "15", "30", "45"];
const periodList = ["AM", "PM"];


//TODO Extract out modal properties for code reuse
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