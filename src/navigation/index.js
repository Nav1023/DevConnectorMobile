import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Landing from '../component/screen/Landing';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from '../component/screen/Login';
import SignUp from '../component/screen/Signup';

export default class NavigationRouter extends React.PureComponent {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="landing"
            component={Landing}
            hideNavBar={true}
            initial={true}
          />
          <Scene key="login" component={Login} hideNavBar={true} />
          <Scene key="register" component={SignUp} hideNavBar={true} />
        </Stack>
      </Router>
    );
  }
}
