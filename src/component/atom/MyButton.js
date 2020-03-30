import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


export default MyButton = (props) => {
    // const { title = 'Enter', style = {}, textStyle = {} } = this.props;

    return (
        <TouchableOpacity style={[styles.button]}>
            <Text style={[styles.text]}>{props.title}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#2AC062',
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