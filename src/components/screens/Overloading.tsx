import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import Label from '../atom/Label';
import {overload} from '../../assets/images/URL';
import {HEIGHT, WIDTH} from '../../assets/size';
import {Icon} from 'react-native-elements';
import {white} from '../../assets/color/Color';
import {useTranslation} from 'react-i18next';
import Switch from '../atom/Switch';
import { useDispatch} from 'react-redux';
import i18n from '../../languages/i18next';
interface Props {
  navigation: any;
}
export default function Overloading(props: Props) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
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
          <Label content={t('overloading.btnstart')} color="white" size={30} />
          <Icon name="right" type="antdesign" size={32} color={white} />
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
