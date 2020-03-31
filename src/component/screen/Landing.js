import React, { Component } from 'react'
import { Text, View, Button, ImageBackground, Dimensions} from 'react-native'
import MyButton from '../atom/MyButton';
import RootView from '../organism/RootView';

class Landing extends Component {

  constructor() { 
    super();
    this.state = { 
      title: 'Hide',
    }; 

    onUpdate = () => {
      if(this.state.title === 'Hide')
        this.setState({title: 'Show'});
      else
        this.setState({title: 'Hide'});
    }
} 

  render() {
     const {title} = this.state
    return (
        <View >
          <ImageBackground  
            source={require('../../assests/image/background.jpeg')}
            style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: 'rgba(255,0,0)'}}
            imageStyle={{opacity: 0.7}}
          >
            <View style={{alignItems:'center', justifyContent:'center', marginTop: 100}}>
              <Text style={{fontSize:40, fontWeight:'bold', color:'white', marginTop:50}}> Developer Connector </Text>
              <Text style={{marginHorizontal:30,display:'flex',
                  alignItems:'center', fontWeight:'bold', color:'white', justifyContent:'center'}}> Create a developer profile/portfolio,</Text>
              <Text style={{marginHorizontal:30,display:'flex',
                  alignItems:'center', fontWeight:'bold', color:'white', justifyContent:'center'}}> share posts and get help from other developers.</Text>
            </View>
            
            <MyButton
              title="Login"
              onPress = {onUpdate}
              style = {{  backgroundColor: '#f4f4f4', marginTop: 250 }}
              textStyle = {{ color: 'black'}}
            />
            <MyButton
              title="Register"
              onPress = {onUpdate}
              style = {{  backgroundColor: '#17a2b8', marginTop: 10}}
              textStyle = {{ color: '#FFFFFF'}}
            />
          </ImageBackground>
        </View>
    );
  }
}

export default Landing;
