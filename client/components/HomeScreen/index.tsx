import React from 'react';
import { View, StyleSheet } from 'react-native';
import { screenHeight, bottomTabHeight } from 'utils/screenSize';

import Header from 'components/shared/Header';
import TasksInfoSquare from './InfoSquares/TasksInfoSquare';
import ScreenWrapper from '../shared/ScreenWrapper'
import WelcomeBanner from './WelcomeBanner';


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
        <ScreenWrapper >
            <View >
                <Header title={"Home"} />
                <WelcomeBanner />
            </View>
            <View style={styles.container} >
                <TasksInfoSquare />
                <TasksInfoSquare />
                <TasksInfoSquare />
                <TasksInfoSquare />
            </View>
        </ScreenWrapper>
    );
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});
