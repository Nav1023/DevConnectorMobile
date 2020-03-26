import React, { Component } from 'react';
import { Text, View } from 'react-native'

import Landing from '../component/screen/Landing';
import {Router, Stack, Scene} from 'react-native-router-flux';

export default class NavigationRouter extends  React.PureComponent {
    render() {
    return (
        <Router>
            <Stack key="root">
              <Scene key="home" component={Landing} />
            </Stack>
        </Router>
    );
    }
}