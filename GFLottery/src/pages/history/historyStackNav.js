import  HistoryHall from './historyHall';
import {StackNavigator} from "react-navigation";
import React, {Component} from 'react';
import * as CardStackStyleInterpolator from "react-navigation";

const RouteConfigs = {
    HistoryHall: {
        screen: HistoryHall,
        navigationOptions: ({navigation}) => ({
            title: '开奖数据',
        }),
    }
};

const StackNavigatorConfig = {
    initialRouteName: 'HistoryHall',
    initialRouteParams: {initPara: '初始页面参数'},
    navigationOptions: {
        title: '开奖数据',
        headerTitleStyle: {fontSize: 18, color: '#666666'},
        headerStyle: {height: 48, backgroundColor: '#fff'},
    },
    mode: 'card',
    headerMode: 'screen',
    cardStyle: {backgroundColor: "#ffffff"},
    transitionConfig: (() => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    })),
    onTransitionStart: (() => {
        console.log('页面跳转动画开始');
    }),
    onTransitionEnd: (() => {
        console.log('页面跳转动画结束');
    }),
};

const Navigator = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default class HistoryStackNav extends Component {
    render() {
        return (
            <Navigator/>
        )
    };
}
