import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { Toolbar } from 'react-native-material-ui';
import { TabBarTitleText } from '../components/StyledText';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: () => <Toolbar
      style={{
        container:{backgroundColor: Colors.headerColor}
      }}
      leftElement={<TabBarTitleText>Me</TabBarTitleText>}
    />,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBE7',
  },
});
