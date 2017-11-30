import  Hall from './hall';
import {StackNavigator} from "react-navigation";
import React, {Component} from 'react';
import * as CardStackStyleInterpolator from "react-navigation";

const RouteConfigs = {
    Hall: {
        screen: Hall,
    }
};

const StackNavigatorConfig = {
    initialRouteName: 'Hall',
    initialRouteParams: {initPara: '初始页面参数'},
    navigationOptions: {
        title: '官方网彩',
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

export default class HallStackNav extends Component {
    render() {
        return (
            <Navigator/>
        )
    };
}
