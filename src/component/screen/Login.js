import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import { verticalScale, horizontalScale } from '../../utils/DevConnectorMobileStyleSheet';
import LinearGradient from 'react-native-linear-gradient';
import MyTextField from '../atom/MyTextField';
import MyButton from '../atom/MyButton';

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
      },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
  });

class Login extends Component {
    constructor() { 
        super();
        this.state = { 
          email: '',
          password: ''
        }; 
        onUpdate = () => {
            console.log('Landing');
        } 
 }
    

  render() {
    const {email, password} = this.state
    return (
      <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>
        <LinearGradient 
           colors={['#363640', '#5a5a82', '#363640']} 
           style={styles.linearGradient}
           start={{x: 0.1, y: 0.1}} end={{x: 1.2, y: 0.}}
        >
            <View>
                <Text style={[styles.text, { fontSize:35, marginTop: verticalScale(80), marginHorizontal: horizontalScale(10)}]}> Sign In </Text>
                <Text style={[styles.text, { fontSize:20, marginTop: verticalScale(10), marginHorizontal: horizontalScale(20)}]}>Glad to see you back</Text>
            </View>
            <View style={{marginTop: verticalScale(70), marginHorizontal: horizontalScale(20)}}>
                <MyTextField
                  label = 'Enter Email'
                  value = {email}
                  onChangeText = {onUpdate}
                /> 
                <MyTextField
                    label = 'Password'
                    value = {password}
                    onChangeText = {onUpdate}
                    secureEntry={true}
                />
              <MyButton
                title="Login"
                onPress = {onUpdate}
                style = {[styles.button, {shadowColor:'#515a5a', backgroundColor:'#fff8e5', marginHorizontal: horizontalScale(60)}]}
                textStyle = {{ color: 'black'}}
              />
            </View>
            {/* <View style={{marginLeft: horizontalScale(20), marginTop: verticalScale(30), alignSelf: 'flex-start'}}>
                <Text style={[styles.text, { fontSize:16}]}>Don't have account </Text>
                <MyButton
                 title="SignUp"
                 onPress = {onUpdate}
                 style = {[styles.button, { height:15, borderWidth:0} ]}
                 textStyle = {{ color: '#000000'}}
                 />
            </View> */}
        </LinearGradient>
      </View>
    );
  }
}

export default Login;
