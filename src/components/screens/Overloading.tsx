import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Label from '../atom/Label';
import {overload} from '../../assets/images/URL';
import {HEIGHT, WIDTH} from '../../assets/size';
import {Icon} from 'react-native-elements';
import {Color} from '../../assets/color/Color';
import {useTranslation} from 'react-i18next';
import Switch from '../atom/Switch';
import i18n from '../../languages/i18next';
import Dormitory from '../../services/databases/SQLITE/Dormitory';
interface Props {
  navigation: any;
}
export default function Overloading(props: Props) {
  const [data, setDate] = useState({})
  const {t} = useTranslation();
  const handleLogin = () => {
    props.navigation.replace('Login');
  };
  const handleChange = (value: boolean)=>{
    if (value){
      i18n.changeLanguage('en');
    }
    else
    i18n.changeLanguage('vi');
  }

  return (
    <SafeAreaView>
      <Image style={{opacity: 0.8}} source={overload} resizeMode="stretch" />
        <View style = {styles.switch}>
          <Switch 
            value = {false}
            textActive='EN'
            textInActive='VI'
            valueChange={(value: boolean)=>handleChange(value)}
          />
        </View>
      <View style={styles.content}>
        <View>
          <Label
            style={styles.label}
            content={t('overloading.label')}
            color="white"
            size={30}
          />
          <Text style={styles.title}>{t('overloading.content')}</Text>
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.btnView}>
          <Label content={t('overloading.btnstart')} color={Color.white} size={30} />
          <Icon name="right" type="antdesign" size={32} color={Color.white} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  switch: {
    position:'absolute',
    right: 20,
    top: 50
  },
  content: {
    width: WIDTH,
    position: 'absolute',
    top: HEIGHT / 1.9,
    flexDirection: 'column',
    rowGap: HEIGHT / 3.4,
  },
  label: {
    alignSelf: 'center',
  },
  title: {
    width: WIDTH / 2,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
  },
  btn: {
    position: 'relative',
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
