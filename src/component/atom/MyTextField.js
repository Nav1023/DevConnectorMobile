import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import React, {PureComponent} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

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
    shadowOffset: {height: 10, width: 0},
    shadowRadius: 20,
  },

  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
});

class MyTextField extends PureComponent {
  render() {
    const {
      secureEntry = false,
      errorMessage = '',
      baseColor = '#FFFFFF',
      label,
      value,
      onChangeText,
    } = this.props;
    return (
      <View>
        <OutlinedTextField
          label={label}
          value={value}
          inputContainerStyle={{backgroundColor: '#44435a'}}
          baseColor={baseColor}
          textColor="#FFFFFF"
          tintColor={baseColor}
          onChangeText={onChangeText}
          secureTextEntry={secureEntry}
          error={errorMessage}
        />
      </View>
    );
  }
}

export default MyTextField;
