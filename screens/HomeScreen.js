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
  TouchableHighlight,
} from 'react-native';
import MapView from 'react-native-maps';

import { MonoText, TabBarTitleText } from '../components/StyledText';
import { Toolbar } from 'react-native-material-ui';
import Colors from '../constants/Colors';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    StatusBar.setHidden(true)
    // this._groupPopupDialog()
  }

  setModalVisible = (visible) => {
    this.setState({ isVisible: visible });
  }

  componentWillMount() {
    this.props.navigation.setParams({setModalVisible: this.setModalVisible});
  }

  static navigationOptions = ({ navigation }) => ({
    header: (<Toolbar
      style={{
        container: { backgroundColor: Colors.headerColor }
      }}
      searchable={{
        autoFocus: true,
        placeholder: 'Search',
      }}
      leftElement="group-add"
      onLeftElementPress={() => {navigation.state.params.setModalVisible(true)}}
    />)
  })

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <MapView style={styles.mapContainer}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} ></MapView>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.isVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.isVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView >
    );
  }

  _handleLearnMorePress = () => {
    // WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    // WebBrowser.openBrowserAsync(
    //   'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    // );
  };
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
