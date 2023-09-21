import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Overloading from '../../components/screens/Overloading';
import Login from '../../components/screens/Login';
import TabBottom from '../../components/organism/TabBottom';
const Stack = createStackNavigator();
export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Overloading" component={Overloading} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name = "Main" component={TabBottom}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
