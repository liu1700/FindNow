import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ActionButton } from 'react-native-material-ui';
import Collapsible from 'react-native-collapsible';
import ChatView from '../components/ChatView/ChatView';
import CollapseView from "react-native-collapse-view";

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

    _renderView = (collapse) => {
        return (
            <View style={styles.view}>
                <Text>Toggle {collapse ? 'on' : 'off'}</Text>
            </View>
        )
    }

    _renderCollapseView = (collapse) => {
        return (
            <ChatView />
        )
    }

    render() {
        return (
            <CollapseView
                collapsed={this.state.isCollapesd}
                renderView={this._renderView}
                renderCollapseView={this._renderCollapseView}
            >
            </CollapseView>
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
    view: {
        height: 50,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    collapseView: {
        padding: 20
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