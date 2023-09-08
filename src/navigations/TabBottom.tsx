import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import { HEIGHT, WIDTH } from '../assets/size';
import { arrayTab } from './../data/arrayTab';
import { parent, white, yellow } from '../assets/color/Color';
const Tab = createBottomTabNavigator();

export default function TabBottom() {
    return (
        <Tab.Navigator
            backBehavior='initialRoute'
            screenOptions={{
                tabBarStyle:styles.tab,
                headerShown: false,
            }}
        >
            {
                arrayTab.map((item: any, index: number) => {
                    return (
                        <Tab.Screen
                            key={index}
                            name={item.route}
                            component={item.component}
                            options={{
                                tabBarIcon:({color, focused})=>(
                                    <Icon 
                                    name={item.icon} 
                                    type={item.type} 
                                    color={!focused?white: yellow} 
                                    style={{transform:[{scale: focused?1.4:1}]}}/>
                                ),
                                tabBarLabel:()=>null
                            }}
                        />
                    )
                })
            }
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tab:{
        height: HEIGHT / 16,
        backgroundColor: '#4F4F4F',
        position: 'absolute',
        bottom: 10,
        borderRadius: 15,
        marginHorizontal: WIDTH*0.08,
        elevation: 10,
    }
})