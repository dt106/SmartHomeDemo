import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HEIGHT, WIDTH} from '../../assets/size';
import LinearGradient from 'react-native-linear-gradient';
import type {PropsWithChildren} from 'react';
import Weather from '../molecule/Weather';
import ButtonAdd from '../atom/ButtonAdd';
import {useTranslation} from 'react-i18next';
import RoomDB from '../../services/databases/Room';
import loginSV from '../../services/axios';
import Home_BoxDorm from '../molecule/Home_BoxDorm';
import {yellow} from '../../assets/color/Color';
import Home_List from '../organism/Home_List';
import Home_BoxHC from '../molecule/Home_BoxHC';

const roomDB = new RoomDB();
const API = new loginSV();
type Props = PropsWithChildren<{
  route: any;
  navigation: any;
}>;
export default function Home(props: Props) {
  const data = props.route.params;
  const [hcs, setHC]: any = useState([]);
  const [dormitories, setDormitory] = useState([]);
  const [show, setShow] = useState(false);
  const {t} = useTranslation();

  const handleHC = (value: any) => {
    setHC(value);
    setShow(!show);
    props.navigation.navigate('List_HC', {data: hcs})
  };
  useEffect(() => {
    API.GetDormitories(data.refeshToken).then(doc => {
      setDormitory(doc?.data);
    });
  }, []);
  return (
    <LinearGradient
      colors={['#211D1D', '#828282']}
      start={{x: 0.5, y: 0.6}}
      style={styles.container}>
      <Weather title={t('home.weather')} />
      <View style={styles.main}>
          <Home_List
            data={dormitories}
            children={
              <Home_BoxDorm
                icon={{
                  name: 'apartment',
                  type: 'material',
                  color: yellow,
                }}
                onPress={value => handleHC(value)}
              />
            }
          />
      </View>
      <ButtonAdd title={t('home.dorm')} onPress={() => setShow(!show)} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: 30,
    paddingTop: 20,
  },
  main: {
    width: WIDTH / 1,
    height: HEIGHT / 1.71,
  },
  viewBox: {
    width: WIDTH / 2,
    height: HEIGHT / 3.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
