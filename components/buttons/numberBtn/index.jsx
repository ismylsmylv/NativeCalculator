import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const NumberBtn = ({ title, onPress, buttonStyle, textStyle, large, controlBtn, grayBtn }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[!large ? styles.buttonNumbers : styles.buttonNumbersLarge, controlBtn && styles.controlBtn, grayBtn && styles.grayBtn, buttonStyle]}>
            <Text style={[styles.buttonText, grayBtn && styles.grayBtn, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create(

    {
        buttonNumbers: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 80,
            width: 80,
            backgroundColor: '#333333',
            borderRadius: 50,

        },
        buttonNumbersLarge: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 72,
            width: 170,
            backgroundColor: '#333333',
            borderRadius: 50,

        },
        buttonText: {
            color: 'white',
            fontSize: 30,
        },
        controlBtn: {
            backgroundColor: '#FF9F0A',

        },
        grayBtn: {
            backgroundColor: '#A5A5A5',
            color: 'black',
            fontWeight: '500',
        },

    }
);
export default NumberBtn;
