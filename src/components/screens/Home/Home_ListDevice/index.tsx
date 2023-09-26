import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Home_List from '../../../organism/Home_List';
import Home_BoxDevice from '../../../molecule/Home_BoxDevice';
import DeviceDTO from '../../../../services/databases/DTO/DeviceDTO';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../../../../assets/color/Color';
import Header from '../../../organism/Header';
import { HEIGHT } from '../../../../assets/size';
import { styles } from './styles';
import { Icon } from 'react-native-elements';
type Props = PropsWithChildren<{
  route?: any;
}>;
export default function Home_ListDevice(props: Props) {
  const data: DeviceDTO[] = props.route.params.data;
  return (
    <LinearGradient colors={[Color.black, Color.parent, Color.parent, Color.yellow]} style = {styles.container}>
      <Header title='Thiết bị' icon = {<Icon name='add-box' type='material' color={Color.yellow} size={30}/>}/>
      <Home_List style = {{height: HEIGHT/1.21}} data={data} children={<Home_BoxDevice />} />
    </LinearGradient>
  );
}

