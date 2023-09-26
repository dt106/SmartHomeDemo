import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {mapdevices} from '../../assets/images/URL';
import {HEIGHT, WIDTH} from '../../assets/size';
import LoginGroup from '../organism/LoginGroup';
import Popup from '../molecule/Popup';
import Modal from 'react-native-modal';
import User from '../../services/databases/SQLITE/User';
const user = new User();
interface Props {}

export default function Login() {
  const [popup, setPopup] = useState(true);
  const [item, setItem]: any = useState({});
  const [blur, setBlur] = useState(false);
  const handleItem = (value: object) => {
    setItem(value);
    setPopup(false);
  };
  useEffect(()=>{
    user.CreateTable();
  },[])
  return (
    <TouchableWithoutFeedback onPress={()=>{
      setBlur(true);
      setTimeout(() => {
        setBlur(false);
      }, 200);
    }}>
      <View style={styles.container}>
        <Image
          style={{width: WIDTH / 1.2, alignSelf: 'flex-end'}}
          resizeMode="contain"
          source={mapdevices['loa']}
        />
        <LoginGroup blur = {blur} info={item} />
        <Modal isVisible={popup} animationOutTiming={1500}>
          <Popup
            modal={(value: boolean) => setPopup(value)}
            item={(value: object) => {
              handleItem(value);
            }}
          />
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
  },
});
