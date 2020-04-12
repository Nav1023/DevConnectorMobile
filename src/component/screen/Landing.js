import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Platform,
} from 'react-native';
import MyButton from '../atom/MyButton';
import RootView from '../organism/RootView';
import {
  verticalScale,
  horizontalScale,
} from '../../utils/DevConnectorMobileStyleSheet';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  text: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: Platform.OS === 'android' ? 'bold' : '700',
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
    width: horizontalScale(140),
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Hide',
    };
  }
  onLogInPress = () => {
    Actions.replace('login');
  };

  onRegisterPress = () => {
    Actions.replace('register');
  };

  render() {
    const {title} = this.state;
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          colors={['#363640', '#5a5a82', '#363640']}
          style={styles.linearGradient}
          start={{x: 0.1, y: 0.1}}
          end={{x: 1.2, y: 0}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: verticalScale(100),
            }}>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 30,
                  marginTop: verticalScale(80),
                  marginHorizontal: horizontalScale(5),
                },
              ]}>
              {' '}
              Developer Connector{' '}
            </Text>
            <Text
              style={[
                styles.text,
                {fontSize: 12, marginHorizontal: horizontalScale(20)},
              ]}>
              {' '}
              Create a developer profile/portfolio, share posts{' '}
            </Text>
            <Text
              style={[
                styles.text,
                {fontSize: 12, marginHorizontal: horizontalScale(20)},
              ]}>
              {' '}
              and get help from other developers.
            </Text>
          </View>
          <View style={[styles.loginStyle, {marginTop: verticalScale(200)}]}>
            <MyButton
              title="Login"
              onPress={this.onLogInPress}
              style={[styles.button]}
              textStyle={{color: 'white'}}
            />
            <MyButton
              title="Register"
              onPress={this.onRegisterPress}
              style={[
                styles.button,
                {
                  backgroundColor: '#fff8e5',
                  borderWidth: 0,
                  marginLeft: horizontalScale(10),
                },
              ]}
              textStyle={{color: '#000000'}}
            />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default Landing;
