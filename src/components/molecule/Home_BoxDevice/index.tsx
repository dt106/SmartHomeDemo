import {PropsWithChildren} from 'react';
import {Image, Text, View} from 'react-native';
import {white, yellow} from '../../../assets/color/Color';
import {WIDTH} from '../../../assets/size';
import Label from '../../atom/Label';
import {styles} from './styles';
import DeviceDTO from '../../../services/databases/DTO/DeviceDTO';
import Switch from '../../atom/Switch';

type Props = PropsWithChildren<{
  data?: DeviceDTO;
}>;
export default function Home_BoxDevice(props: Props) {
  const data = props.data;
  return (
    <View>
      <View style={styles.container}>
        <Label content={data?.name ? data.name : ''} color={yellow} size={20} />
        <Switch value = {data?.statusId===1?true:false}/>
      </View>
    </View>
  );
}
