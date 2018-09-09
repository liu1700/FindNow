import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  SectionList,
  Text,
} from 'react-native';
import MapView from 'react-native-maps';

import { MonoText, TabBarTitleText } from '../components/StyledText';
import { Toolbar, ActionButton } from 'react-native-material-ui';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import Colors from '../constants/Colors';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      haveNotes: false,
    };
  }

  componentDidMount() {
    StatusBar.setHidden(true)
  }

  static navigationOptions = {
    header: () => <Toolbar
      style={{
        container: { backgroundColor: Colors.headerColor }
      }}
      searchable={{
        autoFocus: true,
        placeholder: 'Search',
      }}
      leftElement="group-add"
    />,
  };

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

        <MonoText
          style={{ position: "absolute", top: 10 }}
        >Hello</MonoText>
      </KeyboardAvoidingView >
    );
  }

  createContent = () => {
    console.log("create")
    this.popupDialog.show();
  };

  _handleLearnMorePress = () => {
    // WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    // WebBrowser.openBrowserAsync(
    //   'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    // );
  };
}

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBE7',
  },
  contentContainer: {
  },
  mapContainer: {
    flex: 1,
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
