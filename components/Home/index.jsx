import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumberBtn from '../buttons/numberBtn';

const Home = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);
    const [operation, setOperation] = useState('');
    const [resultShown, setresultShown] = useState(false);
    const buttonListener = (value) => {
        setresultShown(true);
        if (value === '=') {
            const num = parseFloat(input);
            if (operation === '+') {
                setResult(result + num);
            } else if (operation === '-') {
                setResult(result - num);
            } else if (operation === '*') {
                setResult(result * num);
            } else if (operation === '/') {
                setResult(result / num);
            }
            setInput('');
            setOperation('');
        } else if (value === 'AC') {
            setInput('');
            setResult(0);
            setOperation('');
        } else if (['+', '-', '*', '/'].includes(value)) {
            setresultShown(true)
            setResult(parseFloat(input));
            setInput('');
            setOperation(value);
        } else {
            setInput((prevInput) => prevInput + value);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.result}>
                {resultShown ? input : 0}
                {operation}
                {resultShown ? result : 0}
            </Text>
            <View>
                <View style={[styles.buttonRow, styles.largeRow]}>
                    <NumberBtn
                        style={[styles.buttonNumbers, styles.buttonLarge]}
                        title="AC"
                        onPress={() => buttonListener('AC')}
                    />
                    <NumberBtn
                        style={[styles.buttonNumbers, styles.buttonLarge]}
                        title="+/-"
                        onPress={() => buttonListener('+/-')}
                    />
                    <NumberBtn
                        style={[styles.buttonNumbers, styles.buttonLarge]}
                        title="%"
                        onPress={() => buttonListener('%')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="+"
                        onPress={() => buttonListener('+')}
                    />
                </View>
                <View style={styles.buttonRow}>
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="7"
                        onPress={() => buttonListener('7')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="8"
                        onPress={() => buttonListener('8')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="9"
                        onPress={() => buttonListener('9')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="-"
                        onPress={() => buttonListener('-')}
                    />
                </View>
                <View style={styles.buttonRow}>
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="6"
                        onPress={() => buttonListener('6')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="5"
                        onPress={() => buttonListener('5')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="4"
                        onPress={() => buttonListener('4')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="*"
                        onPress={() => buttonListener('*')}
                    />
                </View>
                <View style={styles.buttonRow}>
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="3"
                        onPress={() => buttonListener('3')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="2"
                        onPress={() => buttonListener('2')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="1"
                        onPress={() => buttonListener('1')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="/"
                        onPress={() => buttonListener('/')}
                    />
                </View>
                <View style={[styles.buttonRow, styles.largeRow]}>
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="0"
                        onPress={() => buttonListener('0')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="."
                        onPress={() => buttonListener('.')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="="
                        onPress={() => buttonListener('=')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 20,
        marginBottom: 10,
    },
    largeRow: {
        justifyContent: 'space-between',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        height: 800,
        color: 'white',
    },
    result: {
        color: 'white',
        fontSize: 24, // Adjust font size as needed
    },
    buttonLarge: {
        backgroundColor: "red"
    }

});

export default Home;
