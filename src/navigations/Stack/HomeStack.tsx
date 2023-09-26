import {StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../components/screens/Home/Home';
import MainTemplate from '../../components/template/MainTemplate';
import Home_ListHC from '../../components/screens/Home/Home_ListHC';
import Home_ListDevice from '../../components/screens/Home/Home_ListDevice';
const Stack = createStackNavigator();
type Props = PropsWithChildren<{
  route?: any;
}>;
export default function HomeStack(props: Props) {
  const data: any = props.route.params;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} initialParams={data} />
      <Stack.Screen name="List_HC" component={Home_ListHC} />
      <Stack.Screen name='List_Device' component={Home_ListDevice}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
