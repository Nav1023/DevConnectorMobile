import React, { Component } from 'react';
import { View, Text, Image, Dimensions} from 'react-native';
// const {width, height} = require('Dimensions').get('window');

class RootView extends Component {

  render() {
    return (
      <View>
       <Image 
         source={require('../../assests/image/showcase.jpg')}
         style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}}/>
      </View>
    );
  }
}

export default RootView;
