import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import ScreenWrapper from 'components/shared/ScreenWrapper';
import Header from 'components/shared/Header';
import CalendarDay from './CalendarDay';


function initializeWeeklyData() {

    let today = new Date()
    let mondayDateNumber = today.getDate() - today.getDay() + 1;

    let dataArray = [];
    for (let i = 0; i < 7; i++) {
        dataArray.push({
            nameOfDay: dayOfWeek[i],
            dayNumber: mondayDateNumber + i,
        })
    }
    console.log("dataArray is", dataArray)
    return dataArray
}




const WorkScheduleScreen = () => {
    return (
        <ScreenWrapper>
            <Header title={"Calendar"} />
            <FlatList
                data={initializeWeeklyData()}
                renderItem={({ item }) =>
                    <CalendarDay
                        nameOfDay={item.nameOfDay}
                        dayNumber={item.dayNumber}
                    />}
            />
        </ScreenWrapper>
    )
}
export default WorkScheduleScreen;


const dayOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']





const styles = StyleSheet.create({

});