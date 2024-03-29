import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumberBtn from '../buttons/numberBtn';

const Home = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('0');
    const [operation, setOperation] = useState('');
    const [resultShown, setresultShown] = useState(false);
    const [placeholder, setplaceholder] = useState("0")
    const [final, setfinal] = useState('');
    const [finalShown, setfinalShown] = useState(false);
    const buttonListener = (value) => {
        setresultShown(true);
        if (value === '=') {
            const num = parseFloat(input);
            if (operation === '+') {
                setResult(result + num); setfinal(result + num); setfinalShown(true); setInput('');
                setResult('');
            } else if (operation === '-') {
                setResult(result - num); setfinal(result - num); setfinalShown(true); setInput('');
                setResult('');
            } else if (operation === 'x') {
                console.log(result);
                setResult(result * num); setfinal(result * num); setfinalShown(true); setInput('');
                setResult('');
            } else if (operation === '/') {
                setResult(result / num); setfinal(result / num); setfinalShown(true); setInput('');
                setResult('');
            } else if (operation === '%') {
                setResult(result * num / 100); setfinal(result * num / 100); setfinalShown(true); setInput('');
                setResult('');
            } else if (operation === '+/-') {
                const negative = 0 - result;
                setResult(negative); setfinal(negative); setfinalShown(true); setInput('');
                setResult('');
            }
            setInput('');
            setOperation('');
        } else if (value === 'AC') {
            setInput('');
            setplaceholder("0")
            setResult(0);
            setfinalShown(false);
            setfinal(0);
            setresultShown(true);
            setOperation('');
        } else if (['+', '-', 'x', '/', '%', '+/-'].includes(value)) {
            setresultShown(true);
            setResult(parseFloat(input));
            setInput('');
            setOperation(value);
        } else {
            setplaceholder("")
            setresultShown(true);
            setInput((prevInput) => prevInput + value);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.resultView}>
                <Text style={styles.result}>
                    {/* {resultShown ? result : ''} */}
                    {/* {result && result} */}
                    {/* {operation} */}
                    {placeholder}
                    {input && input}
                    {/* {resultShown ? input : ''} */}
                    {finalShown && final}
                </Text>
            </View>
            <View>
                <View style={[styles.buttonRow, styles.largeRow]}>
                    <NumberBtn
                        style={[styles.buttonNumbers, styles.buttonLarge]}
                        title="AC"
                        grayBtn={true}
                        onPress={() => buttonListener('AC')}
                    />
                    <NumberBtn
                        style={[styles.buttonNumbers, styles.buttonLarge]}
                        grayBtn={true}
                        title="+/-"
                        onPress={() => buttonListener('+/-')}
                    />
                    <NumberBtn
                        style={[styles.buttonNumbers, styles.buttonLarge]}
                        grayBtn={true}
                        title="%"
                        onPress={() => buttonListener('%')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="/" controlBtn={true}
                        onPress={() => buttonListener('/')}
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
                        title="x" controlBtn={true}
                        onPress={() => buttonListener('x')}
                    />
                </View>
                <View style={styles.buttonRow}>
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="4"
                        onPress={() => buttonListener('4')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="5"
                        onPress={() => buttonListener('5')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="6"
                        onPress={() => buttonListener('6')}
                    />


                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="-" controlBtn={true}
                        onPress={() => buttonListener('-')}
                    />
                </View>
                <View style={styles.buttonRow}>
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="1"
                        onPress={() => buttonListener('1')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="2"
                        onPress={() => buttonListener('2')}
                    />


                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="3"
                        onPress={() => buttonListener('3')}
                    />
                    <NumberBtn
                        style={styles.buttonNumbers}
                        title="+"
                        controlBtn={true}
                        onPress={() => buttonListener('+')}
                    />
                </View>
                <View style={[styles.buttonRow, styles.largeRow]}>
                    <NumberBtn
                        style={styles.buttonNumbers}
                        large={true}
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
                        title="=" controlBtn={true}
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
        gap: 10,
        marginBottom: 10,
    },
    largeRow: {
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'black',
        flex: 1,
        color: 'white',
    },
    result: {
        color: 'white',
        fontSize: 80,
        fontWeight: '300',
        marginBottom: 20,
        textAlign: 'right',
    },
    buttonLarge: {
        backgroundColor: 'red',
    },
    resultView: {
        display: 'flex',
        justifyContent: 'flex-end',
        flex: 1,
    },

});

export default Home;
