import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import NumberBtn from '../buttons/numberBtn';

const Home = () => {
    return <View style={style.container}>
        <Text>0</Text>
        <View>
            <View style={[style.buttonRow, style.largeRow]}>
                <NumberBtn style={style.buttonNumbers} title="AC" />
                <NumberBtn style={style.buttonNumbers} title="+" />
            </View>
            <View style={style.buttonRow}>
                <NumberBtn style={style.buttonNumbers} title="7" />
                <NumberBtn style={style.buttonNumbers} title="8" />
                <NumberBtn style={style.buttonNumbers} title="9" />
                <NumberBtn style={style.buttonNumbers} title="-" />
            </View>
            <View style={style.buttonRow}>
                <NumberBtn style={style.buttonNumbers} title="6" />
                <NumberBtn style={style.buttonNumbers} title="5" />
                <NumberBtn style={style.buttonNumbers} title="4" />
                <NumberBtn style={style.buttonNumbers} title="*" />

            </View>
            <View style={style.buttonRow}>
                <NumberBtn style={style.buttonNumbers} title="3" />
                <NumberBtn style={style.buttonNumbers} title="2" />
                <NumberBtn style={style.buttonNumbers} title="1" />
                <NumberBtn style={style.buttonNumbers} title="/" />
            </View>
            <View style={[style.buttonRow, style.largeRow]}>
                <NumberBtn style={style.buttonNumbers} title="0" />
                <NumberBtn style={style.buttonNumbers} title="=" />
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
            backgroundColor: '#333333',
            height: 800,
            color: 'white'
        },

    }
);
export default Home;
