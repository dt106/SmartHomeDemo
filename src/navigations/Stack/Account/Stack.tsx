import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../../../components/screens/Account/Profile';
import Issue from '../../../components/screens/Account/Issue';
import Setting from '../../../components/screens/Account/Setting';
import Account from '../../../components/screens/Account';
const Stack = createStackNavigator();
export default function AccountStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='account' component={Account}/>
        <Stack.Screen name='profile' component={Profile}/>
        <Stack.Screen name='issue' component={Issue}/>
        <Stack.Screen name='setting' component={Setting}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})