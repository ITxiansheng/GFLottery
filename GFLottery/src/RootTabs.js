import React, {Component} from 'react';
import {StackNavigator, TabBarBottom, TabNavigator} from "react-navigation";
// import TabBarItem from "./TabBarItem";
import {Image} from "react-native";

import HallStackNav  from "./pages/hall/hallStackNav";
import HistoryStackNav from "./pages/history/historyStackNav";
import DiscoverStackNav from "./pages/discover/discoverStackNav";
import MineStackNav from "./pages/Mine/mineStackNav";

export default class RootTabs extends Component {
  render() {
      return (
          <Tab/>
      );
  }
}

const TabRouteConfigs = {
  Home: {
      screen: HallStackNav,
      navigationOptions: ({navigation}) => ({
          tabBarLabel: '',
          showLabel:false,
          tabBarIcon: ({focused, tintColor}) => (
            <Image source={ focused ? require('./images/TabBar_LotteryHall_selected.png') : require('./images/TabBar_LotteryHall.png') }
            style={ {tintColor:tintColor, width: 46, height: 50} }
     />
          ),          
      }),
  },
  History: {
      screen: HistoryStackNav,
      navigationOptions: {
          tabBarLabel: '开奖',
          tabBarIcon: ({focused, tintColor}) => (
            <Image source={ focused ? require('./images/TabBar_History_selected.png') : require('./images/TabBar_History.png') }
            style={ {tintColor:tintColor, width: 46, height: 50} }
     />
          ),
      },
  }
  ,
  Discover: {
    screen: DiscoverStackNav,
    navigationOptions: {
        tabBarLabel: '发现',
        tabBarIcon: ({focused, tintColor}) => (
            <Image source={ focused ? require('./images/TabBar_Discovery_selected.png') : require('./images/TabBar_Discovery.png') }
            style={ {tintColor:tintColor, width: 46, height: 50} }
     />
        ),
    },
}
,
  Mine: {
      screen: MineStackNav,
      navigationOptions: {
          tabBarLabel: '我的',
          tabBarIcon: ({focused, tintColor}) => (
            <Image source={ focused ? require('./images/TabBar_MyLottery_selected.png') : require('./images/TabBar_MyLottery.png') }
            style={ {tintColor:tintColor, width: 46, height: 50} }
     />
          ),
      },
  }
};
const TabNavigatorConfigs = {
  initialRouteName: 'Home',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled:true,  
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#06C1AE', //  激活版块的颜色
    inactiveTintColor: '#979797', // 非激活版块的颜色
    style: {backgroundColor: '#ffffff',justifyContent:'center',alignSelf:'center'},// 背景颜色
    labelStyle: {fontSize: 4,color:'transparent'},          // 文字大小
},
};
const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);

