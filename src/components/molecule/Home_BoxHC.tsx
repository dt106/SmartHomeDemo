import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {HEIGHT, WIDTH} from '../../assets/size';
import {black, parent, white, yellow} from '../../assets/color/Color';
import {Icon} from 'react-native-elements';
import Label from '../atom/Label';
import Switch from '../atom/Switch';
import SmartAPI from '../../services/axios';
import HCDTO from '../../services/databases/DTO/HCDTO';
const API = new SmartAPI();
interface Props {
  data?: HCDTO;
  onPress: (value: any) => void;
}
export default function Home_BoxHC(props: Props) {
  let sw: boolean = false;
  if (props.data) {
    sw = props.data.homeControllerActiveStatusId === 1 ? false : true;
  }
  const [value, setValue] = useState(sw);
  const handlePress = () => {
    if (props.data) {
      API.GetDevicesByDormID(props.data.dormitoryId).then((doc: []) => {
        const data = doc.filter(
          (doc: any) => doc.homeControllerId === props.data?.id,
        );
        props.onPress(data);
      });
    }
  };
  return (
    <View>
      {props.data && (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
          <Label content={props.data.name} color={yellow} size={WIDTH / 20} />
          <View style={styles.box}>
            <Icon name="connectdevelop" type="font-awesome" color={yellow} />
            <Icon
              name="cast-connected"
              type="material-community"
              color={yellow}
            />
          </View>
          <View>
            <Switch value={value} />
          </View>
          <Label content={props.data.ipAddress} color={yellow} />
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
    rowGap: 20,
    paddingTop: 15,
    elevation: 15,
    shadowColor: white,
    overflow: 'hidden',
  },
  image: {
    width: WIDTH / 2.3,
  },
  box: {
    flexDirection: 'row',
    columnGap: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: black,
    textAlign: 'center',
    borderLeftWidth: 3,
    borderRightWidth: 3,
  },
  quantity: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '700',
    color: black,
    textAlign: 'center',
    borderLeftWidth: 3,
    borderRightWidth: 3,
  },
});
