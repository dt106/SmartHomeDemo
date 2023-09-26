import {StyleSheet, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HEIGHT, WIDTH} from '../../../assets/size';
import LinearGradient from 'react-native-linear-gradient';
import type {PropsWithChildren} from 'react';
import Weather from '../../molecule/Weather';
import {useTranslation} from 'react-i18next';
import RoomDB from '../../../services/databases/SQLITE/Room';
import loginSV from '../../../services/axios';
import Home_BoxDorm from '../../molecule/Home_BoxDorm';
import {Color} from '../../../assets/color/Color';
import Home_List from '../../organism/Home_List';

const roomDB = new RoomDB();
const API = new loginSV();
type Props = PropsWithChildren<{
  route: any;
  navigation: any;
}>;
export default function Home(props: Props) {
  const data = props.route.params;
  const [dormitories, setDormitory] = useState([]);
  const {t} = useTranslation();

  const handleHC = (value: any) => {
    props.navigation.navigate('List_HC', {data: value});
  };
  useEffect(() => {
    API.GetDormitories(data.refeshToken).then(doc => {
      setDormitory(doc?.data);
    });
  }, []);
  return (
    <LinearGradient
      colors={[Color.black, Color.black, Color.parent, Color.white]}
      style={styles.container}>
      <Weather title={t('home.weather')} />
      <View style={styles.main}>
        <Home_List
          data={dormitories}
          onRefresh={() => {}}
          children={
            <Home_BoxDorm
              icon={{
                name: 'apartment',
                type: 'material',
                color: Color.yellow,
              }}
              onPress={value => handleHC(value)}
            />
          }
        />
      </View>
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
    paddingTop: 10,
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
