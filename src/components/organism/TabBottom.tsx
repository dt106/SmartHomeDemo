import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {HEIGHT, WIDTH} from '../../assets/size';
import {arrayTab} from '../../data/arrayTab';
import {white, yellow} from '../../assets/color/Color';
import User from '../../services/databases/User';
import loginSV from '../../services/axios';
const user = new User();
const API = new loginSV();
const Tab = createBottomTabNavigator();
export default function TabBottom({route}: {route: any}) {
  const {data}: any = route.params;
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      screenOptions={{
        tabBarStyle: styles.tab,
        headerShown: false,
      }}>
      {arrayTab.map((item: any, index: number) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            initialParams={data}
            options={{
              tabBarIcon: ({color, focused}) => (
                <Icon
                  name={item.icon}
                  type={item.type}
                  color={!focused ? white : yellow}
                  style={{transform: [{scale: focused ? 1.4 : 1}]}}
                />
              ),
              tabBarLabel: () => null,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    height: HEIGHT / 16,
    backgroundColor: '#4F4F4F',
    position: 'absolute',
    bottom: 10,
    borderRadius: 15,
    marginHorizontal: WIDTH * 0.08,
    elevation: 10,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
