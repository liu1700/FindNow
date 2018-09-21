import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  SectionList,
  Text,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import MapView from 'react-native-maps';

import InputBar from '../components/InputBar';
import ChattingCollapse from '../components/ChattingCollapse';
import { Toolbar, Button } from 'react-native-material-ui';
import Colors from '../constants/Colors';
import { GiftedChat } from 'react-native-gifted-chat';
import ChatView from '../components/ChatView/ChatView';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      message: '',
      messages: [],
    };

    this.menuFunctions = [
      { name: "Setting", cb: this.toSetting },
      { name: "Privacy Policy", cb: this.showPrivacyPolicy }
    ]

    this.optionsList = this.menuFunctions.map(v => { v.name })

    this.props.navigation.setParams(
      {
        setModalVisible: this.setModalVisible,
        options: this.menuFunctions,
        optionList: this.optionsList,
      }
    );
  }

  toSetting = () => {
    const { navigate } = this.props.navigation;
    navigate('Setting')
  }

  showPrivacyPolicy = () => {
    console.log("show policy")
  }

  componentDidMount() {
    StatusBar.setHidden(true)
    // this._groupPopupDialog()
  }

  setModalVisible = (visible) => {
    this.setState({ isVisible: visible });
  }

  static navigationOptions = ({ navigation }) => (
    {
      header: (<Toolbar
        style={{
          container: { backgroundColor: Colors.headerColor }
        }}
        rightElement={{
          menu: {
            icon: "menu",
            labels: ["Setting", "Privacy Policy"],
          }
        }}
        onRightElementPress={(label) => {
          if (label.result === "itemSelected") {
            let option = navigation.state.params.options[label.index];
            if (option !== null) {
              option.cb()
            }
          }
        }}
        leftElement="group-add"
        onLeftElementPress={() => { navigation.state.params.setModalVisible(true) }}
      />)
    }
  )

  onSend(messages = []) {
    console.log(messages)
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  send() {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: 1,
          text: this.state.message,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          }
        }),
      };
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <MapView style={styles.mapContainer}
          showsUserLocation={true}
          loadingEnabled={true}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} ></MapView>

        <ChatView />
        {/* <ChattingCollapse
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: 1,
          }}
        /> */}

        <InputBar
          value={this.state.message}
          onPress={() => this.send()}
          onChangeText={text => this.setState({ message: text })} />

        <Modal
          animationType="slide"
          transparent={false}
          presentationStyle="pageSheet"
          visible={this.state.isVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22 }}>
            <View>
              <Button
                raised
                primary
                text="Create group"
                onPress={() => {
                  console.log("create");
                }} />
              <Button
                raised
                primary
                text="Join group"
                onPress={() => {
                  console.log("join");
                }} />
              <Button
                raised
                primary
                text="Back"
                onPress={() => {
                  this.setModalVisible(!this.state.isVisible);
                }} />
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBE7',
  },
  separator: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInputStyle: {
    height: 40,
    width: 160,
    marginTop: 100,
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  mapContainer: {
    flex: 1,
  },
  popupContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    paddingTop: 200,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
