import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    Alert,
} from 'react-native';

import DeviceInfo from 'react-native-device-info';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import url, { BuildPost } from '../networking/Http';
import UserDatas from '../globalStorage/variables';

export default class OnboardingScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: null,
            error: null,
        };
    }

    static navigationOptions = {
        header: null,
    };

    async componentDidMount() {
        this._configureGoogleSignIn();
        await this._getCurrentUser();
    }

    componentDidUpdate() {
        const { userInfo } = this.state;
        const { navigate } = this.props.navigation;
        if (userInfo != null) {
            console.log(userInfo);
            let resp = this._postLogin(userInfo);
            userInfo.uid = resp.uid
            UserDatas.setMyUserData(userInfo)
            navigate('Main');
        }
    }

    _configureGoogleSignIn() {
        GoogleSignin.configure({
            webClientId: '756154264723-qoidsh56k7q7bhsmp0cl5ljfgvhk0p1q.apps.googleusercontent.com',
            offlineAccess: false,
        });
    }

    async _postLogin(u) {
        try {
            let userInfo = u.user
            let response = await fetch(
                url.LoginURL, BuildPost({
                    'fullName': userInfo.name,
                    'imgUrl': userInfo.photo,
                    'email': userInfo.email,
                    'idToken': u.idToken,
                })
            );

            let responseJson = await response.json();
            console.log(responseJson)
            return responseJson.body;
        } catch (error) {
            console.error(error);
        }
    }

    async _getCurrentUser() {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            this.setState({ userInfo, error: null });
        } catch (error) {
            const errorMessage =
                error.code === statusCodes.SIGN_IN_REQUIRED ? 'Please sign in :)' : error.message;
            this.setState({
                error: errorMessage,
            });
        }
    }

    render() {
        return (
            <View style={[styles.container, { flex: 1 }]}>
                {this.renderSignIn()}
            </View>
        );
    }

    renderSignIn() {
        return (
            <View style={styles.container}>
                <GoogleSigninButton
                    style={{ width: 212, height: 52 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    onPress={this._signIn}
                />
            </View>
        );
    }

    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo, error: null });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // sign in was cancelled
                Alert.alert('cancelled');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation in progress already
                Alert.alert('in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert('play services not available or outdated');
            } else {
                Alert.alert('Something went wrong', error.toString());
                this.setState({
                    error,
                });
            }
        }
    };
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
