import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { verticalScale, horizontalScale } from '../../utils/DevConnectorMobileStyleSheet';
import LinearGradient from 'react-native-linear-gradient';
import MyTextField from '../atom/MyTextField';
import MyButton from '../atom/MyButton';
import CustomIcon from '../atom/CustomIcon';
import Ripple from '../atom/Ripple';
import { Actions } from 'react-native-router-flux';
import { validationRegex } from '../../utils/Constants';

const styles = StyleSheet.create({
  text: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: Platform.OS === 'android' ? 'bold' : '800',
    color: 'white',
    justifyContent: 'center'
  },
  loginStyle: {
    paddingTop: verticalScale(40),
    paddingLeft: horizontalScale(25),
    paddingRight: horizontalScale(25),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    width: horizontalScale(285)
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      emailErrorMessage: '',
      emailError: false,
      passwordErrorMessage: '',
      passwordError: false,
      emailColor: '#FFFFFF',
      passwordColor: '#FFFFFF',
      confirmPasswordColor: '#FFFFFF',
      nameColor:'#FFFFFF',
      confirmPasswordError: false,
      confirmPasswordErrorMessage:'',
      nameError:false,
      nameErrorMessage:''
    };
  }

  onSignUpPress = () => {
    console.log('SignUp Pressed');

    if (this.state.name.length <2) {
      this.setState({ nameErrorMessage: `Name length should be more than 2`, nameError: true, nameColor: '#d61818' });
    } else {
      this.setState({ nameErrorMessage: '', nameError: false, nameColor: '#FFFFFF' });
    }
    if (validationRegex.email.test(this.state.email) === false) {
      this.setState({ emailErrorMessage: 'Please enter a valid email', emailError: true, emailColor: '#d61818' });
    }
    else {
      this.setState({ emailErrorMessage: '', emailError: false, emailColor: '#FFFFFF' });
    }
    if (validationRegex.password.test(this.state.password) === false) {
      this.setState({ passwordErrorMessage: 'Password length should be more than 5 with minimum one letter, one number and one special character', passwordError: true, passwordColor: '#d61818' });
    } else {
      this.setState({ passwordErrorMessage: '', passwordError: false, passwordColor: '#FFFFFF' });
    }
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ confirmPasswordErrorMessage: `Passwords Don't match`, confirmPasswordError: true, confirmPasswordColor: '#d61818' });
    } else {
      this.setState({ confirmPasswordErrorMessage: '', confirmPasswordError: false, confirmPasswordColor: '#FFFFFF' });
    }
  }
  onBackPress =() =>{
    Actions.replace('landing'); 
  }

  onChangeTextEmail = (text) => {
    this.setState({ 
      email: text,
      emailErrorMessage:'', 
      emailError:false
    });
  }
  onChangeTextPassword = (text) => {
    this.setState({ 
      password: text, 
      passwordErrorMessage: '', 
      passwordError: false 
    });
  }
  onChangeTextConfirmPassword = (text) => {
    this.setState({ 
      confirmPassword: text, 
      confirmPasswordErrorMessage: '', 
      confirmPasswordError: false 
    });
  }
  onChangeTextName = (text) => {
    this.setState({ 
      name: text.trim(), 
      nameErrorMessage: '', 
      nameError: false 
    });
  }


  renderTextField({ label, value, onChangeText, secureEntry, baseColor = '#FFFFFF' }) {
    return (<MyTextField
      label={label}
      value={value}
      onChangeText={onChangeText}
      secureEntry={secureEntry}
      baseColor={baseColor}
    />
    )
  }


  render() {
    const { 
      email, 
      password, 
      name, 
      confirmPassword,
      emailErrorMessage, 
      emailError, 
      passwordColor, 
      emailColor, 
      passwordErrorMessage,
      passwordError,
      nameColor,
      confirmPasswordColor,
      nameError,
      nameErrorMessage,
      confirmPasswordError,
      confirmPasswordErrorMessage
     } = this.state;

    const EmailField = {
      label: 'Enter Email',
      value: email,
      onChangeText: this.onChangeTextEmail,
      secureEntry: false,
      baseColor: emailColor
    };
    const PasswordField = {
      label: 'Password',
      value: password,
      onChangeText: this.onChangeTextPassword,
      secureEntry: true,
      baseColor: passwordColor
    };
    const ConfirmPasswordField = {
      label: 'Confirm Password',
      value: confirmPassword,
      onChangeText: this.onChangeTextConfirmPassword,
      secureEntry: true,
      baseColor: confirmPasswordColor
    }; 
    const Name = {
      label: 'Name',
      value: name,
      onChangeText: this.onChangeTextName,
      secureEntry: false,
      baseColor: nameColor
    };

    return (
      <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
        <LinearGradient
          colors={['#363640', '#5a5a82', '#363640']}
          style={styles.linearGradient}
          start={{ x: 0.1, y: 0.1 }} end={{ x: 1.2, y: 0. }}
        >
          <Ripple  style ={{marginTop: verticalScale(20), marginLeft: verticalScale(15), width: verticalScale(50), height:horizontalScale(50)}} onPress={this.onBackPress}>
            <CustomIcon
              name='arrow-left'
              size={25}
              color={'white'}
              />
          </Ripple> 

          <View>
            <Text style={[styles.text, { fontSize: 35, marginTop: verticalScale(10), marginHorizontal: horizontalScale(10) }]}> Sign Up </Text>
            <Text style={[styles.text, { fontSize: 20, marginTop: verticalScale(5), marginHorizontal: horizontalScale(20) }]}>Create your account</Text>
          </View>
          <View style={{ marginTop: verticalScale(30), marginHorizontal: horizontalScale(20) }}>
            {this.renderTextField(Name)}
            {nameError ? <View style={{ marginTop: verticalScale(-8) }}>
                <Text style={{ fontSize: 12, color: '#d61818' }}>{nameErrorMessage}</Text>
              </View> : null}
            <View style={{ marginTop: verticalScale(10), marginBottom: verticalScale(10) }}>
              {this.renderTextField(EmailField)}
              {emailError ? <View style={{ marginTop: verticalScale(-8) }}>
                <Text style={{ fontSize: 12, color: '#d61818' }}>{emailErrorMessage}</Text>
              </View> : null}
            </View>
            <View style={{ marginTop: verticalScale(10), marginBottom: verticalScale(10) }}>
              {this.renderTextField(PasswordField)}
              {passwordError ? <View style={{ marginTop: verticalScale(-8) }}>
                  <Text style={{ fontSize: 12, color: '#d61818' }}>{passwordErrorMessage}</Text>
                </View> : null}
            </View>
            <View style={{ marginTop: verticalScale(10), marginBottom: verticalScale(10) }}>
              {this.renderTextField(ConfirmPasswordField)}
              {confirmPasswordError ? <View style={{ marginTop: verticalScale(-8) }}>
                  <Text style={{ fontSize: 12, color: '#d61818' }}>{confirmPasswordErrorMessage}</Text>
                </View> : null}
            </View>
            <MyButton
              title="SignUp"
              onPress={this.onSignUpPress}
              style={[styles.button, { shadowColor: '#515a5a', backgroundColor: '#fff8e5',  marginTop: verticalScale(20) }]}
              textStyle={{ color: 'black' }}
            />
          </View>
          <View style={{marginTop: verticalScale(5), justifyContent: 'center', flexDirection: 'row'}}>
                <Text style={[styles.text, { fontSize:12}]}>Have an account ? </Text>
                <Text 
                  style={[styles.text, { fontSize:12, textDecorationLine: 'underline'}]} 
                  onPress = { () => Actions.replace('login')}
                >
                   SignIn
                </Text>
            </View>
        </LinearGradient>
      </View>
    );
  }
}

export default SignUp;
