import React, {Component} from 'react';
import {Text, View} from "react-native";
export default class HistoryHall extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f2a8ff', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 50}}>
                    开奖页
                </Text>
            </View>
        );
    }
}