import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Badge, Button } from 'react-native-elements';
import Collapsible from 'react-native-collapsible';

export default class ChattingCollapse extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Badge style={styles.badge}>
                    <Text>99</Text>
                </Badge>
                <Button style={styles.chatButton}
                    title={null}
                    rounded={true}
                    icon={{ name: 'chat', type: 'entypo' }} >
                </Button>
            </View>
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