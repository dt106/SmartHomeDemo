/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux'
import 'react-native-gesture-handler'
import TabBottom from './src/navigations/TabBottom';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { store } from './src/redux/store/store';
const Tab = createBottomTabNavigator();
function App(): JSX.Element {
  return (
    <>
      <StatusBar
        translucent
        hidden={false}
        barStyle={'light-content'}
      />
      <Provider store={store}>
        <NavigationContainer>
          <TabBottom />
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
