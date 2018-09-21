import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-material-ui';

export default class InputBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 0
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    {...this.props}
                    multiline={true}
                    style={styles.input}
                    onContentSizeChange={(event) => {
                        this.setState({ height: event.nativeEvent.contentSize.height })
                    }}
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                />
                <Button
                    {...this.props}
                    style={{ container: styles.confirm }} text='SEND' />
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