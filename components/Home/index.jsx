import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import NumberBtn from '../buttons/numberBtn';

const Home = () => {
    const [input, setinput] = useState(0)
    const [result, setresult] = useState(0)
    const [operation, setoperation] = useState('')
    const buttonListener = (value) => {
        if (value == '=') {
            // setresult(input) 
            if (operation == '-') {
                setresult(result - input)
            }
            else if (operation == '+') {
                setresult(result + input)
            }
            else if (operation == '*') {
                setresult(result * input)
            }
            else if (operation == '/') {
                setresult(result / input)
            }

        }
        else if (value == 'AC') {
            setinput(0)
            setresult(0)
            setoperation('')
        }
        else if (value == '+') {
            // setresult(0)
            setresult(result + input)
            setinput(0)
        }
        else if (value == '-') {
            // setresult(0)
            setresult(result - input)
            setinput(0)
        }
        else if (value == '*') {
            setresult(1)
            setresult(result * input)
            setinput(0)
        }
        else if (value == '/') {
            // setresult(0)
            setresult(result / input)
            setinput(0)
        }
        else {

            // setresult(input + result)
        }
    }
    return <View style={style.container}>
        <Text style={style.result}>{input}{operation}{input}={result}</Text>
        <View>
            <View style={[style.buttonRow, style.largeRow]}>
                <NumberBtn style={style.buttonNumbers} title="AC" onPress={() => {
                    buttonListener('AC')
                }} />
                <NumberBtn style={style.buttonNumbers} title="+" onPress={() => {
                    buttonListener('+')
                    setoperation('+')
                }} />
            </View>
            <View style={style.buttonRow}>
                <NumberBtn style={style.buttonNumbers} title="7" onPress={() => {
                    setinput(7)
                }} />
                <NumberBtn style={style.buttonNumbers} title="8" onPress={() => {
                    setinput(8)
                }} />
                <NumberBtn style={style.buttonNumbers} title="9" />
                <NumberBtn style={style.buttonNumbers} title="-" onPress={() => {
                    buttonListener('-')
                    setoperation('-')
                }} />
            </View>
            <View style={style.buttonRow}>
                <NumberBtn style={style.buttonNumbers} title="6" />
                <NumberBtn style={style.buttonNumbers} title="5" />
                <NumberBtn style={style.buttonNumbers} title="4" />
                <NumberBtn style={style.buttonNumbers} title="*" onPress={() => {
                    buttonListener('*')
                    setoperation('*')
                }} />

            </View>
            <View style={style.buttonRow}>
                <NumberBtn style={style.buttonNumbers} title="3" />
                <NumberBtn style={style.buttonNumbers} title="2" />
                <NumberBtn style={style.buttonNumbers} title="1" />
                <NumberBtn style={style.buttonNumbers} title="/" onPress={() => {
                    buttonListener('/')
                    setoperation('/')
                }} />
            </View>
            <View style={[style.buttonRow, style.largeRow]}>
                <NumberBtn style={style.buttonNumbers} title="0" />
                <NumberBtn style={style.buttonNumbers} title="=" onPress={() => {
                    buttonListener('=')
                }} />
            </View>
        </View>
    </View >;
};

const style = StyleSheet.create(
    {
        buttonRow: {
            fontSize: 576,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: 20,
            marginBottom: 10
        },
        largeRow: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            height: 800,
            color: 'white'
        },
        result: {
            color: 'white'
        }

    }
);
export default Home;
