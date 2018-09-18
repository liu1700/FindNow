import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button, Badge } from 'react-native-material-ui';
import Collapsible from 'react-native-collapsible';

export default class ChattingCollapse extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Badge text="3"></Badge>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 40,
    },
    input: {
        backgroundColor: 'red',
        color: '#ffffff',
        width: '80%',
    },
    confirm: {
        width: '20%',
    }
});