import React, {PureComponent} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

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

class MyButton extends PureComponent {
  // const { title = 'Enter', style = {}, textStyle = {} } = this.props;
  render() {
    const {onPress, style, textStyle, title} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default MyButton;
