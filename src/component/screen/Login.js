import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import {
  verticalScale,
  horizontalScale,
} from '../../utils/DevConnectorMobileStyleSheet';
import LinearGradient from 'react-native-linear-gradient';
import MyTextField from '../atom/MyTextField';
import MyButton from '../atom/MyButton';
import CustomIcon from '../atom/CustomIcon';
import Ripple from '../atom/Ripple';
import {Actions} from 'react-native-router-flux';
import {validationRegex} from '../../utils/Constants';

const styles = StyleSheet.create({
  text: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: Platform.OS === 'android' ? 'bold' : '800',
    color: 'white',
    justifyContent: 'center',
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
    width: horizontalScale(285),
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailErrorMessage: '',
      emailError: false,
      passwordErrorMessage: '',
      passwordError: false,
      emailColor: '#FFFFFF',
      passwordColor: '#FFFFFF',
      isError: true,
    };
  }
  componentDidMount() {
    console.log(this.props);
  }
  onLoginPress = () => {
    const {login} = this.props;
    const {isError, email, password} = this.state;
    if (validationRegex.email.test(this.state.email) === false) {
      this.setState({
        emailErrorMessage: 'Please enter a valid email',
        emailError: true,
        emailColor: '#d61818',
        isError: true,
      });
    } else {
      this.setState({
        emailErrorMessage: '',
        emailError: false,
        emailColor: '#FFFFFF',
        isError: false,
      });
    }
    if (this.state.password.length < 6) {
      this.setState({
        passwordErrorMessage: 'Password length should be more than 5',
        passwordError: true,
        passwordColor: '#d61818',
        isError: true,
      });
    } else {
      this.setState({
        passwordErrorMessage: '',
        passwordError: false,
        passwordColor: '#FFFFFF',
        isError: false,
      });
    }
    console.log(isError);
    if (!isError) {
      login(email, password);
    }
  };
  onBackPress = () => {
    Actions.replace('landing');
  };
  renderTextField({
    label,
    value,
    onChangeText,
    secureEntry,
    baseColor = '#FFFFFF',
  }) {
    return (
      <MyTextField
        label={label}
        value={value}
        onChangeText={onChangeText}
        secureEntry={secureEntry}
        baseColor={baseColor}
      />
    );
  }

  onChangeTextEmail = text => {
    this.setState({email: text, emailErrorMessage: '', emailError: false});
  };
  onChangeTextPassword = text => {
    this.setState({
      password: text,
      passwordErrorMessage: '',
      passwordError: false,
    });
  };

  render() {
    const {
      email,
      password,
      emailErrorMessage,
      emailError,
      passwordColor,
      emailColor,
      passwordErrorMessage,
      passwordError,
    } = this.state;

    const EmailField = {
      label: 'Enter Email',
      value: email,
      onChangeText: this.onChangeTextEmail,
      secureEntry: false,
      baseColor: emailColor,
    };
    const PasswordField = {
      label: 'Password',
      value: password,
      onChangeText: this.onChangeTextPassword,
      secureEntry: true,
      baseColor: passwordColor,
    };
    return (
      <View
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}>
        <LinearGradient
          colors={['#363640', '#5a5a82', '#363640']}
          style={styles.linearGradient}
          start={{x: 0.1, y: 0.1}}
          end={{x: 1.2, y: 0}}>
          <Ripple
            style={{
              marginTop: verticalScale(20),
              marginLeft: verticalScale(15),
              width: verticalScale(50),
              height: horizontalScale(50),
              borderRadius: 25,
            }}
            onPress={this.onBackPress}>
            <CustomIcon name="arrow-left" size={25} color={'white'} />
          </Ripple>
          <View>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 35,
                  marginTop: verticalScale(80),
                  marginHorizontal: horizontalScale(10),
                },
              ]}>
              {' '}
              Sign In{' '}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 20,
                  marginTop: verticalScale(10),
                  marginHorizontal: horizontalScale(20),
                },
              ]}>
              Glad to see you back
            </Text>
          </View>
          <View
            style={{
              marginTop: verticalScale(70),
              marginHorizontal: horizontalScale(20),
            }}>
            <View>
              {this.renderTextField(EmailField)}
              {emailError ? (
                <View style={{marginTop: verticalScale(-8)}}>
                  <Text style={{fontSize: 12, color: '#d61818'}}>
                    {emailErrorMessage}
                  </Text>
                </View>
              ) : null}
            </View>
            <View
              style={{
                marginTop: verticalScale(10),
                marginBottom: verticalScale(10),
              }}>
              {this.renderTextField(PasswordField)}
              {passwordError ? (
                <View style={{marginTop: verticalScale(-8)}}>
                  <Text style={{fontSize: 12, color: '#d61818'}}>
                    {passwordErrorMessage}
                  </Text>
                </View>
              ) : null}
            </View>
            <MyButton
              title="Login"
              onPress={this.onLoginPress}
              style={[
                styles.button,
                {
                  shadowColor: '#515a5a',
                  backgroundColor: '#fff8e5',
                  marginTop: verticalScale(30),
                },
              ]}
              textStyle={{color: 'black'}}
            />
          </View>
          <View
            style={{
              marginTop: verticalScale(5),
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text style={[styles.text, {fontSize: 12}]}>
              Don't have account ?{' '}
            </Text>
            <Text
              style={[
                styles.text,
                {fontSize: 12, textDecorationLine: 'underline'},
              ]}
              onPress={() => Actions.replace('register')}>
              SignUp
            </Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default Login;
