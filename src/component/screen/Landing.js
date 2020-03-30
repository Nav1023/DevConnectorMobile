import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import MyButton from '../atom/MyButton';

export class Landing extends Component {
  render() {
    return (
      <View>
        <Text> Hello world </Text>
        <MyButton
          title="test"
        />
      </View>
    );
  }
}

export default Landing;
