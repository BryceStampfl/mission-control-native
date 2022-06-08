import React from 'react'
import ScreenWrapper from 'components/shared/ScreenWrapper';
import Header from 'components/shared/Header';
import WorkScheduleList from './WorkScheduleList';

const WorkScheduleScreen = () => {
    return (
        <ScreenWrapper>
            <Header title={"Work Schedule"} />
            <WorkScheduleList />
        </ScreenWrapper>
    )
}
export default WorkScheduleScreen