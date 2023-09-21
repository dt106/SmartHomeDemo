import React, {PropsWithChildren, useState} from 'react';
import {styles} from './styles';
import Home_List from '../../organism/Home_List';
import Home_BoxHC from '../../molecule/Home_BoxHC';
import HCDTO from '../../../services/databases/DTO/HCDTO';
import LinearGradient from 'react-native-linear-gradient';
import { black, parent, yellow } from '../../../assets/color/Color';
type Props = PropsWithChildren<{
  route?: any;
  navigation?: any
}>;
export default function Home_ListHC(props: Props) {
  const data: HCDTO[] = props.route.params.data;
  const handlePress = (value: any) =>{
    props.navigation.navigate('List_Device',{data: value})
  }
  return (
    <LinearGradient colors={[black, parent, parent, yellow]} style = {styles.container}>
            <Home_List data={data} children={<Home_BoxHC onPress={(value)=>handlePress(value)}/>} />
    </LinearGradient>
  );
}
