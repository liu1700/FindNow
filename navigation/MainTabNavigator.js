import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'location'}
    />
  ),
};

// const ShareStack = createStackNavigator({
//   Share: ShareScreen,
// });

// ShareStack.navigationOptions = {
//   tabBarLabel: ({ focused }) => (
//     <TabBarLabelText focused={focused}>Share</TabBarLabelText>
//   ),
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={'direction'}
//     />
//   ),
// };

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'menu'}
    />
  ),
};

export default createBottomTabNavigator(
  {
    HomeStack,
    // ShareStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: '#F9FBE7',
      },
    },
  }
);
