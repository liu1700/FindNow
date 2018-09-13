import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import DeviceInfo from 'react-native-device-info';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default class OnboardingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <GoogleSigninButton
                    style={{ width: 312, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
