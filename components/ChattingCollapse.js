import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ActionButton } from 'react-native-material-ui';
import Collapsible from 'react-native-collapsible';
import ChatView from '../components/ChatView/ChatView';

export default class ChattingCollapse extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isCollapesd: true,
        };
    }

    setCollapsed = (collapsed) => {
        this.setState({ isCollapesd: collapsed });
    }

    render() {
        return (
            <View>
                <ActionButton icon="chat" onPress={() => this.setCollapsed(!this.state.isCollapesd)} />
                <Collapsible collapsed={this.state.isCollapesd}>
                </Collapsible>
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