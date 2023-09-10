/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
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
import RoomDB from './src/services/Room';
const roomDB = new RoomDB();
const Tab = createBottomTabNavigator();
function App(): JSX.Element {
  const [status, setStatus] = useState(false)
  useEffect(()=>{
    roomDB.DropTable()
    .then(async()=>{
      roomDB.CreateDB().then(async()=>{
        await roomDB.InsertRoom('Phòng khách', 2, 1);
        await roomDB.InsertRoom('Phòng ngủ 1',1 , 1);
        await roomDB.InsertRoom('Phòng ngủ 2', 1, 1);
        await roomDB.InsertRoom('Hành lang', 3, 1);
      });
    })

    async function createDatabase() {
    }
    async function Insert() {
    }
    createDatabase();
    Insert();
  },[])
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
