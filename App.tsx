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
import RoomDB from './src/services/databases/Room';
import MainStack from './src/navigations/Stack/MainStack';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/languages/i18next';
import Dormitory from './src/services/databases/Dormitory';
import MyScreen from './Demo';
const room = new RoomDB();
const drom = new Dormitory();
function App(): JSX.Element {
  useEffect(() => {
    room.CreateDB().then(async () => {});
    drom.CreateTable();
  }, []);
  return (
    <>
      <StatusBar translucent hidden={false} barStyle={'light-content'} />
      <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <NavigationContainer>
          <MainStack />
          {/* <MyScreen/> */}
        </NavigationContainer>
      </Provider>
      </I18nextProvider>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
