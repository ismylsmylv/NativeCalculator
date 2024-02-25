import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const NumberBtn = ({ title, onPress, buttonStyle, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonNumbers, buttonStyle]}>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create(

    {
        buttonNumbers: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 30,
            width: 30,
            backgroundColor: 'red',
        },
        buttonText: {
            color: 'white'
        }
    }
)
export default NumberBtn