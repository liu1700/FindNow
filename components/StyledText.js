import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={this.props.style} />;
  }
}

export class TabBarLabelText extends React.Component {
  render() {
    return <Text {...this.props} style={this.props.focused ? styles.selectTabBarLableText : styles.defaultTabBarLableText} />;
  }
}

export class TabBarTitleText extends React.Component {
  render() {
    return <Text {...this.props} style={styles.titleText} />;
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    // fontWeight: 'bold',
    marginLeft: 15,
    color: '#fff',
    textAlign: 'center'
  },
  selectTabBarLableText: {
    color: Colors.tabIconSelected,
    textAlign: 'center',
    fontSize: 12
  },
  defaultTabBarLableText: {
    color: Colors.tabIconDefault,
    textAlign: 'center',
    fontSize: 12
  },
})