import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {parent, white, yellow} from '../../assets/color/Color';
import {WIDTH, HEIGHT} from '../../assets/size';
import Label from '../atom/Label';
import {Icon} from 'react-native-elements';
import SmartAPI from '../../services/axios';
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
  data?: any;
}>;
export default function Home_BoxDorm(props: Props) {
  const handleHC = (DormID: string) => {
    API.GetHCsByDormID(DormID).then(doc => {
      props.onPress(doc);
    });
  };
  return (
    <View>
      {props.data && (
        <TouchableOpacity
          onPress={() => handleHC(props.data.id)}
          style={styles.container}>
          <Label content={props.data?.name} color={yellow} />
          <Icon
            name={props.icon.name}
            type={props.icon.type}
            color={yellow}
            size={100}
          />
          <Text style={styles.address}>{props.data.address}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH / 2.3,
    height: HEIGHT / 3.9,
    backgroundColor: parent,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: 10,
    paddingTop: 15,
    elevation: 15,
    shadowColor: white,
    overflow: 'hidden',
  },
  address: {
    color: yellow,
    textAlign: 'center',
  },
});
