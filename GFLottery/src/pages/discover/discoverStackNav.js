import  DiscoverHall from './discoverHall';
import {StackNavigator} from "react-navigation";
import React, {Component} from 'react';
import * as CardStackStyleInterpolator from "react-navigation";

const RouteConfigs = {
    DiscoverHall: {
        screen: DiscoverHall,
        navigationOptions: ({navigation}) => ({
            title: '发现',
        }),
    }
};

const StackNavigatorConfig = {
    initialRouteName: 'DiscoverHall',
    initialRouteParams: {initPara: '初始页面参数'},
    navigationOptions: {
        title: '发现',
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

export default class DiscoverStackNav extends Component {
    render() {
        return (
            <Navigator/>
        )
    };
}
