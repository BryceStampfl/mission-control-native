import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native'
import CalendarDay from './CalendarDay';


const WorkScheduleList = () => {
    const [workData, setWorkData] = React.useState(initializeWeeklyData());

    const updateWorkDay = (newTimes, dayNumber) => {
        let tempArray = workData;
        let index = tempArray.findIndex(item => item.dayNumber == dayNumber)
        let tempElement = { ...tempArray[index] }

        tempElement.timeStart = newTimes.start.hour + ":" + newTimes.start.minute + ' ' + newTimes.start.period;
        tempElement.timeEnd = newTimes.end.hour + ":" + newTimes.end.minute + ' ' + newTimes.end.period;
        tempArray[index] = tempElement;

        setWorkData([...workData])
    }

    useEffect(() => {
        console.log("Data is now", workData)
        console.log("********************************888")
    })

    return (
        <View>
            <FlatList
                data={workData}
                renderItem={({ item }) =>
                    <CalendarDay
                        props={item}
                        updateWorkDay={updateWorkDay}
                    />}
            />
        </View>
    )
}
export default WorkScheduleList;

function initializeWeeklyData() {
    let dayOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    let today = new Date()
    let mondayDateNumber = today.getDate() - today.getDay() + 1;

    let dataArray = [];
    for (let i = 0; i < 7; i++) {
        dataArray.push({
            nameOfDay: dayOfWeek[i],
            dayNumber: mondayDateNumber + i,
            timeStart: '',
            timeEnd: ''
        })
    }
    return dataArray
}