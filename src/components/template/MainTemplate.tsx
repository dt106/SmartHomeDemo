import {Image, Modal, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {HEIGHT, WIDTH} from '../../assets/size';
import {black, white} from '../../assets/color/Color';
import BoxStatus from '../molecule/BoxStatus';
import Header from '../organism/Header';
import LightsStatus from '../organism/LightsStatus';
import LinearGradient from 'react-native-linear-gradient';
import RoomDB from '../../services/databases/Room';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setRefresh} from '../../redux/slices/Room';
import ConfirmDelete from '../molecule/ConfirmDelete';
import {mapping2} from '../../assets/images/URL';
const room = new RoomDB();
export default function MainTemplate({route}: any) {
  const [closeModal, setModal] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {item} = route.params;
  const onDelete = async () => {
    setModal(true);
  };
  const handleYes = async () => {
    dispatch(setRefresh(true));
    await room.Delete(item.ID);
    navigation.goBack();
    setModal(false);
  };
  const handleNo = () => {
    setModal(false);
  };
  return (
    <LinearGradient
      colors={['#211D1D', black, '#828282']}
      start={{x: 0.5, y: 0.6}}
      style={styles.container}>
      <View style={styles.viewImage}>
        <Image
          source={mapping2[item.Image]}
          style={{width: WIDTH, resizeMode: 'stretch'}}
        />
      </View>
      <View style={styles.header}>
        <Header title={item.Name} onDelete={onDelete} />
      </View>
      <View style={styles.main}>
        <View style={styles.box}>
          <BoxStatus
            image="drop"
            decription="Độ ẩm"
            percent={10}
            titlebox={'Thêm máy độ ẩm'}
          />
          <BoxStatus
            image={'wind'}
            decription="Điều hoà không khí"
            percent={100}
            titlebox={'Thêm điều hoà'}
          />
        </View>
        <View>
          <LightsStatus />
        </View>
      </View>
      <Modal visible={closeModal} transparent>
        <ConfirmDelete Yes={handleYes} No={handleNo}/>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: WIDTH,
    height: HEIGHT,
  },
  header: {
    position: 'absolute',
    width: WIDTH,
    height: HEIGHT / 12,
  },
  viewImage: {
    width: WIDTH,
    height: HEIGHT / 2.1,
  },
  main: {
    width: WIDTH / 1.2,
    alignSelf: 'center',
    flexDirection: 'column',
    rowGap: 10,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabBar: {
    position: 'absolute',
    width: WIDTH,
    height: 50,
    bottom: 0,
    backgroundColor: white,
  },
});
