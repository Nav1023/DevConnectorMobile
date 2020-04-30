import React, {Component} from 'react';
import {View} from 'react-native';
import NavigationRouter from './navigation/index';
import {initStore} from './redux/store';
import {Provider} from 'react-redux';

const store = initStore();

export default class index extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationRouter />
      </Provider>
    );
  }
}
