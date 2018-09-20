import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ActionButton } from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';

export default class ChattingCollapse extends React.Component {
    render() {
        return (
            <Collapsible collapsed={false}>
                <Text>99</Text>
            </Collapsible>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'red',
        color: '#ffffff',
        width: '80%',
    },
    confirm: {
        width: '20%',
    },
    badge: {
        position: 'absolute',
    },
    chatButton: {
    },
});