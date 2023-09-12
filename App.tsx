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
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux'
import 'react-native-gesture-handler'
import TabBottom from './src/navigations/TabBottom';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { store } from './src/redux/store/store';
import RoomDB from './src/services/databases/Room';
const roomDB = new RoomDB();
const Tab = createBottomTabNavigator();
function App(): JSX.Element {
  const [status, setStatus] = useState(false)
  useEffect(() => {
    // roomDB.DropTable().then(async()=>{
    roomDB.CreateDB().then(async () => {
      // await roomDB.InsertRoom(1, 'Phòng khách', 'living');
      // await roomDB.InsertRoom(2, 'Phòng ngủ 1', 'bed');
      // await roomDB.InsertRoom(3, 'Phòng ngủ 2', 'bed');
      // await roomDB.InsertRoom(4, 'Hành lang', 'lobby');
    });
    // })

    async function createDatabase() {
    }
    async function Insert() {
    }
    createDatabase();
    Insert();
  }, [])
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
