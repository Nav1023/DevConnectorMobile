import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';
  import React from 'react';
  import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
  
  
  export default MyTextField = (props) => {
      // const { title = 'Enter', style = {}, textStyle = {} } = this.props;
        const { secureEntry=false, errorMessage="", baseColor = '#FFFFFF' } = props;
        // console.log("Email",props);
      return (
          <View >
              <OutlinedTextField 
               label={props.label}
               value = {props.value}
               inputContainerStyle = {{ backgroundColor: '#44435a'}}
               baseColor={props.baseColor}
               textColor='#FFFFFF'
               tintColor = {props.baseColor}
               onChangeText = {props.onChangeText}
               secureTextEntry={secureEntry} 
               error = {errorMessage}
               />
          </View>
      );
  };
  
  
  const styles = StyleSheet.create({
      button: {
          display: 'flex',
          height: 50,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
  
          backgroundColor: '#17a2b8',
          shadowColor: '#2AC062',
          shadowOpacity: 0.4,
          shadowOffset: { height: 10, width: 0 },
          shadowRadius: 20,
      },
  
      text: {
          fontSize: 16,
          textTransform: 'uppercase',
          color: '#FFFFFF',
      },
  });