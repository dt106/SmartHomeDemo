import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import {Color} from '../../assets/color/Color';
import {WIDTH, HEIGHT} from '../../assets/size';
import Label from '../atom/Label';
import {Icon} from 'react-native-elements';
import SmartAPI from '../../services/axios';
import HCDTO from '../../services/databases/DTO/HCDTO';
import DormitoryDTO from '../../services/databases/DTO/DormitoryDTO';

const API = new SmartAPI();
interface IconProp {
  name: string;
  type: string;
  color?: string;
}
type Props = PropsWithChildren<{
  onPress: (value: any) => void;
  icon: IconProp;
  data?: DormitoryDTO;
}>;
export default function Home_BoxDorm(props: Props) {
  const data = props.data;
  const [hcs, setHC]: any = useState();
  const handleHC = () => {
    API.GetHCsByDormID(data?.id).then((doc: HCDTO[]) => {
      props.onPress(doc);
    });
  };
  return (
    <View>
      {data && (
        <TouchableOpacity onPress={handleHC} style={styles.container}>
          <Label content={data?.name} color={Color.yellow} />
          <Icon
            name={props.icon.name}
            type={props.icon.type}
            color={Color.yellow}
            size={100}
          />
          <Text style={styles.address}>{data?.address}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH / 2.3,
    height: HEIGHT / 3.9,
    backgroundColor: Color.parent,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: 10,
    paddingTop: 15,
    elevation: 15,
    shadowColor: Color.white,
    overflow: 'hidden',
  },
  address: {
    color: Color.yellow,
    textAlign: 'center',
  },
});
