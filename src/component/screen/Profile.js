import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';

import {
  verticalScale,
  horizontalScale,
} from '../../utils/DevConnectorMobileStyleSheet';
import Ripple from '../atom/Ripple';
import CustomIcon from '../atom/CustomIcon';

const styles = StyleSheet.create({
  text: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: Platform.OS === 'android' ? 'bold' : '800',
    color: 'black',
    justifyContent: 'center',
  },
  center: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  behind: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: horizontalScale(500),
    height: verticalScale(340),
  },
  middle: {
    position: 'relative',
    marginTop: 100,
    backgroundColor: 'white',
    width: horizontalScale(330),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  photoCircle: {
    width: verticalScale(150),
    height: verticalScale(150),
    marginBottom: verticalScale(10),
    borderRadius: verticalScale(75),
    borderWidth: 3,
    borderColor: '#1e2b5c',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 8,
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
  },

  photo: {
    position: 'absolute',
    borderRadius: verticalScale(120) / 2,
    backgroundColor: '#626366',
    height: verticalScale(120),
    width: verticalScale(120),
    marginBottom: 1000,
    // marginTop:20
  },
  card: {
    width: horizontalScale(310),
    height: verticalScale(50),
    marginBottom: verticalScale(20),
    borderRadius: verticalScale(10),
    borderWidth: 3,
    backgroundColor: '#4a5996',
    borderColor: '#1e2b5c',
    shadowColor: 'white',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 8,
  },
  cardTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ccd8f0',
    fontSize: 18,
    marginLeft: horizontalScale(110),
    marginTop: verticalScale(10),
  },
});

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillClick: false,
      educationClick: false,
      experienceClick: false,
    };
  }

  onEducationPress = () => {
    this.setState(prevState => {
      return {educationClick: !prevState.educationClick};
    });
  };
  onExperiencePress = () => {
    this.setState(prevState => {
      return {experienceClick: !prevState.experienceClick};
    });
  };
  onSkillPress = () => {
    this.setState(prevState => {
      return {skillClick: !prevState.skillClick};
    });
  };

  render() {
    const {skillClick, experienceClick, educationClick} = this.state;
    return (
      <View style={styles.center}>
        <View style={styles.behind} />
        <LinearGradient
          colors={['#1e2b5c', '#777777', '#777777']}
          style={styles.linearGradient}
          start={{x: 0.2, y: 0.2}}
          end={{x: 0.2, y: 1.0}}>
          <View style={{marginTop: verticalScale(50)}}>
            <Text style={(styles.text, {color: 'white', fontSize: 20})}>
              Name
            </Text>
            <Text style={(styles.text, {color: 'white', fontSize: 15})}>
              Title
            </Text>
            <Text style={(styles.text, {color: 'white', fontSize: 15})}>
              Location
            </Text>
          </View>
          <View style={styles.middle}>
            <View style={styles.photoCircle}>
              <Image
                source={{
                  uri:
                    'http://www.gravatar.com/avatar/4d7a1205468632f6ab519d8266173fe8?s=200&r=pg&d=mm',
                }}
                style={{
                  width: verticalScale(144),
                  height: verticalScale(144),
                  borderRadius: verticalScale(72),
                }}
              />
            </View>
            <View>
              <Text style={(styles.text, {marginBottom: verticalScale(100)})}>
                Bio
              </Text>
            </View>

            <View style={{marginBottom: verticalScale(350)}}>
              <Ripple style={styles.card} onPress={this.onSkillPress}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.cardTitle}>Skill Set</Text>
                  <CustomIcon
                    name="circle-down"
                    size={20}
                    color={'#9eb4db'}
                    style={{
                      marginLeft: horizontalScale(100),
                      marginTop: verticalScale(10),
                    }}
                  />
                </View>
              </Ripple>
              {skillClick ? <View style={styles.card}/> : null}
              <Ripple style={styles.card} onPress={this.onExperiencePress}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.cardTitle}> Experience</Text>
                  <CustomIcon
                    name="circle-down"
                    size={20}
                    color={'#9eb4db'}
                    style={{
                      marginLeft: horizontalScale(70),
                      marginTop: verticalScale(10),
                    }}
                  />
                </View>
              </Ripple>
              {experienceClick ? <View style={styles.card} /> : null}
              <Ripple style={styles.card} onPress={this.onEducationPress}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.cardTitle}> Education</Text>
                  <CustomIcon
                    name="circle-down"
                    size={20}
                    color={'#9eb4db'}
                    style={{
                      marginLeft: horizontalScale(78),
                      marginTop: verticalScale(10),
                    }}
                  />
                </View>
              </Ripple>
              {educationClick ? <View style={styles.card}/> : null}
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default Profile;
