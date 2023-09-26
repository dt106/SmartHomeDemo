import {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {Color} from '../../../assets/color/Color';
import Label from '../../atom/Label';
import {styles} from './styles';
import DeviceDTO from '../../../services/databases/DTO/DeviceDTO';
import Switch from '../../atom/Switch';
import { shortText } from '../../../services/shortText';

type Props = PropsWithChildren<{
  data?: DeviceDTO;
}>;
export default function Home_BoxDevice(props: Props) {
  const data = props.data;
  const handleSwitch = (value: boolean)=>{
  }
  return (
    <View>
      <View style={styles.container}>
        <Label content={data?.name ? shortText(data.name) : ''} color={Color.yellow} size={20} />
        <Switch valueChange={(value)=>handleSwitch(value)} value = {data?.statusId===1?true:false}/>
      </View>
    </View>
  );
}
