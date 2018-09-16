import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import OnboardingNavigator from './OnboardingNavigator';
import SettingNavigator from './SettingNavigator';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Onboarding: OnboardingNavigator,
  Setting: SettingNavigator,
}, {
    initialRouteName: 'Onboarding',
  }
);