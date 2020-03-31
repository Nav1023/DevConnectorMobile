import React, { Component } from 'react'
import { Text, View, Button, ImageBackground, Dimensions, StyleSheet, Platform} from 'react-native'
import MyButton from '../atom/MyButton';
import RootView from '../organism/RootView';
import { verticalScale, horizontalScale } from '../../utils/DevConnectorMobileStyleSheet';



const styles = StyleSheet.create({
  text: {
    display:'flex',
    alignItems:'center',
    fontWeight:Platform.OS==='android'?'bold':'800', 
    color:'white', 
    justifyContent:'center'
  },
  loginStyle: {
    paddingTop: verticalScale(40),
    paddingLeft: horizontalScale(25),
    paddingRight: horizontalScale(25),
    flexDirection: 'row',
    justifyContent: 'center',
    },
  button:{
      backgroundColor: 'transparent', 
      borderColor: 'white', 
      borderWidth: 1,
      width: horizontalScale(140)
    }
});

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
            
          >
            <View style={{alignItems:'center', justifyContent:'center', marginTop: 100}}>
              <Text style={[styles.text, { fontSize:35, marginTop: verticalScale(80), marginHorizontal: horizontalScale(17)}]}> Developer Connector </Text>
              <Text style={[styles.text, {marginHorizontal:40}]}> Create a developer profile/portfolio,</Text>
              <Text style={[styles.text, {marginHorizontal:40}]}> share posts and get help from other developers.</Text>
            </View>
            <View style={[styles.loginStyle, {marginTop: verticalScale(200)} ]}>
              <MyButton
                title="Login"
                onPress = {onUpdate}
                style = {[styles.button]}
                textStyle = {{ color: 'white'}}
              />
              <MyButton
                title="Register"
                onPress = {onUpdate}
                style = {[styles.button, { backgroundColor:'#fcffda', borderWidth:0, marginLeft: horizontalScale(10)} ]}
                textStyle = {{ color: '#000000'}}
              />
            </View>
          </ImageBackground>
        </View>
    );
  }
}

export default Landing;
