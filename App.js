import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TransactionScreen from './screens/SearchScreen';
import SearchScreen from './screens/BookTransactionScreen';

export default class App extends React.Component {
  render(){

  return (
   <Appcontainer></Appcontainer> 
  );
}}

var TabNavigator = createBottomTabNavigator({
  Transaction : {screen:TransactionScreen},
  Screen:{screen:SearchScreen}
})
const Appcontainer = createAppContainer(TabNavigator)