import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../components/screens/Home';
import MainTemplate from '../../components/template/MainTemplate';
const Stack = createStackNavigator();
export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
            name='Room'
            component={MainTemplate}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})