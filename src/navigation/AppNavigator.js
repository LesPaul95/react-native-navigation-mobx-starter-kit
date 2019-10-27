import React from "react";
import {
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import AppScreen from "../screens/App";

const AppStack = createStackNavigator({
  Home: { screen: AppScreen },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
