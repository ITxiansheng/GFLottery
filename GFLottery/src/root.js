/**
 * App入口，将store注入Provider
 * Songlcy create by 2017-01-10
 * @flow
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import RootTabs from './RootTabs';
import RootTabs from './RootTabs'
import store from './store/store';

export default class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <RootTabs />
            </Provider>
        )
    }
}
