import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-material-ui';

export default class ChattingCollapse extends React.Component {

    viewing = () => {
        console.log(this.state.message);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ message: text })}
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                />
                <Button style={{container:styles.confirm}} onPress={() => this.send()} text='SEND' />
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