/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/store/store';
import MainStack from './src/navigations/Stack/MainStack';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/languages/i18next';
import Dormitory from './src/services/databases/SQLITE/Dormitory';
import HC from './src/services/databases/SQLITE/HC';
import Device from './src/services/databases/SQLITE/Device';
const drom = new Dormitory();
const hc = new HC();
const device = new Device();
function App(): JSX.Element {
  useEffect(() => {
    hc.CreateTable();
    drom.CreateTable();
    device.CreateTable();
  }, []);
  return (
    <>
      <StatusBar translucent hidden={false} barStyle={'light-content'} />
      <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <NavigationContainer>
          <MainStack />
          {/* <MyScreen/> */}
          {/* <Home/> */}
        </NavigationContainer>
      </Provider>
      </I18nextProvider>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
