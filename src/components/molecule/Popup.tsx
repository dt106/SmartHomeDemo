import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {HEIGHT, WIDTH} from '../../assets/size';
import Storage from '../../services/asyncstorage';
import Label from '../atom/Label';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../../assets/color/Color';
const store = new Storage();

interface Props {
  item: (value: any) => void;
  modal: (value: boolean) => void;
}

export default function Popup(props: Props) {
  const [info, setInfo]: any = useState({});
  useEffect(() => {
    async function GetInfo() {
      const Info: any = await store.GetInfo();
      setInfo(JSON.parse(Info));
    }
    GetInfo();
  }, []);
  useEffect(() => {}, []);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        props.modal(false);
      }}>
      <View style={styles.container}>
        <LinearGradient colors={['white', 'white']} style={styles.popup}>
          <TouchableOpacity
            style={styles.username}
            onPress={() => {
              props.item(info);
            }}>
            <Label
              style={styles.label}
              content={info.username}
              color={Color.yellow}
              size={20}
            />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  popup: {
    position: 'absolute',
    bottom: 0,
    width: WIDTH,
    height: HEIGHT / 3,
    alignSelf: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 20,
  },
  username: {
    width: WIDTH,
    height: 40,
    alignSelf: 'center',
    borderBottomWidth: 0.7,
    borderColor: Color.yellow,
  },
  label: {
    lineHeight: 40,
    textAlign: 'center',
  },
});
