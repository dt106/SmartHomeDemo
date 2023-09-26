import {
  Keyboard,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useEffect, useState} from 'react';
import Label from '../atom/Label';
import FormLogin from '../molecule/FormLogin';
import {HEIGHT, WIDTH} from '../../assets/size';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../../assets/color/Color';
import loginSV from '../../services/axios';
import Storage from '../../services/asyncstorage';
import User from '../../services/databases/SQLITE/User';
import { useTranslation } from 'react-i18next';
import i18n from '../../languages/i18next';
import Button from '../atom/Button';
const loginsv = new loginSV();
const store = new Storage();
const user = new User();
interface Props {
  info: any;
  blur: boolean;
}
export default function LoginGroup(props: Props) {
  const [username, setuserName] = useState('');
  const [password, setpassword] = useState('');
  const {t} = useTranslation();
  const navigation: any = useNavigation();
  const handleLogin = async () => {
    const info: Object = {
      username: username,
      password: password,
    };
    const response: any = await loginsv.Login(info);
    if (response?.status === 200) {
      await store.SaveInfo(info);
      await user.Insert(
          response.data.displayName,
          response.data.email,
          response.data.sexId,
          response.data.birthday,
          response.data.phonenumber,
        )
      navigation.navigate('Main', {data: response.data});
      ToastAndroid.show(
        `Xin chào ${response.data.displayName}`,
        ToastAndroid.SHORT,
      );
    } else {
      ToastAndroid.show('Kiểm lại thông tin', ToastAndroid.SHORT);
    }
  };
  const handleUserNameChange = (value: string) => {
    setuserName(value);
  };
  const handlePasswordChange = (value: string) => {
    setpassword(value);
  };
  useEffect(() => {
    setuserName(props.info.username);
    setpassword(props.info.password);
  }, [props.info]);
  return (
    <View style={styles.formGroup}>
      <Label
        content={t('login.login')}
        size={40}
        color="black"
        style={{marginBottom: HEIGHT / 10, elevation: 10}}
      />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <FormLogin
          blur={props.blur}
          username={username}
          ChangeUser={(value: string) => handleUserNameChange(value)}
          password={password}
          ChangePassWord={(value: string) => handlePasswordChange(value)}
          Containerstyle={{marginHorizontal: WIDTH / 15}}
        />
      </TouchableWithoutFeedback>
      <Button title='Đăng nhập' style = {styles.btn} onPress={handleLogin}/>
      <Text style={styles.forget}>{t('login.forgot')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  formGroup: {
    width: WIDTH / 1.2,
    height: HEIGHT / 2,
    position: 'absolute',
    alignSelf: 'center',
    top: HEIGHT / 3,
    borderRadius: 16,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    elevation: 15,
    opacity: 0.9,
    flexDirection:'column',
    rowGap: 15,
  },
  btn:{
    width: WIDTH/1.5,
    alignSelf:'center'
  },
  forget: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});
