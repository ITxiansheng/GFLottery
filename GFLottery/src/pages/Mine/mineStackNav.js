import  MineHall from './mineHall';
import {StackNavigator} from "react-navigation";
import React, {Component} from 'react';
import * as CardStackStyleInterpolator from "react-navigation";

const RouteConfigs = {
    MineHall: {
        screen: MineHall,
        navigationOptions: ({navigation}) => ({
            title: '我的',
        }),
    }
};

const StackNavigatorConfig = {
    initialRouteName: 'MineHall',
    initialRouteParams: {initPara: '初始页面参数'},
    navigationOptions: {
        title: '我的',
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

export default class MineStackNav extends Component {
    render() {
        return (
            <Navigator/>
        )
    };
}
