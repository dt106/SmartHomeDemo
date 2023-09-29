import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HEIGHT, WIDTH} from '../../assets/size';
import {Color} from '../../assets/color/Color';
import {Icon} from 'react-native-elements';
import Label from '../atom/Label';
import SmartAPI from '../../services/axios';
import HCDTO from '../../services/databases/DTO/HCDTO';
import DeviceDTO from '../../services/databases/DTO/DeviceDTO';
import { useTranslation } from 'react-i18next';
import Device from '../../services/databases/SQLITE/Device';
const API = new SmartAPI();
const deviceST = new Device();
interface Props {
  data?: HCDTO;
  onPress: (value: any) => void;
}
export default function Home_BoxHC(props: Props) {
  const [data, setData]:any= useState([])
  const [content, setcontent] = useState('');
  const {t} = useTranslation();
  const handlePress = async() => {
      props.onPress(data);
      data.map((item: DeviceDTO)=>{
        deviceST.Insert(item);
      })
  };
  useEffect(()=>{
    API.GetDevicesByDormID(props.data?.dormitoryId).then(
      (doc: DeviceDTO[]) => {
        setData(doc)
        const num = doc.length;
        setcontent(`${props.data?.ipAddress}, ${num} ${num>1?t('home.hc.devices'):t('home.hc.device')}`);
      }
    )
  },[])
  return (
    <View>
      {props.data && (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
          <View style = {{marginLeft: 15,}}>
            <Label content={props.data.name} color={Color.yellow} size={WIDTH / 20} />
            <Label content={content} color={Color.yellow} />
          </View>
          <Icon name='chevron-right' type='entypo' color={Color.yellow}/>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH/1.15,
    borderRadius: 15,
    height: HEIGHT / 10,
    backgroundColor: Color.parent,
    flexDirection: 'row',
    elevation: 15,
    shadowColor: Color.white,
    justifyContent:'space-between',
    alignItems:'center'
  },
});
