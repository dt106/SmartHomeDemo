import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import React, {PropsWithChildren, useEffect, useRef, useState} from 'react';
import {StyleProp, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {white} from '../../assets/color/Color';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
type Props = PropsWithChildren<{
  Containerstyle?: StyleProp<ViewStyle>;
  blur?: boolean;
  username: string;
  ChangeUser: (value: string) => void;
  password: string;
  ChangePassWord: (value: string) => void;
}>;
export default function FormLogin(props: Props) {
  const [show, setShow] = useState(false);
  const {t} = useTranslation();
  const userRef: any = useRef();
  const passRef: any = useRef();
  useEffect(()=>{
    if(props.blur){
      userRef.current.blur();
      passRef.current.blur();
    }
  },[props.blur])
  useEffect(()=>{
    // i18n.changeLanguage(lng);
  },[])
  return (
      <KeyboardAvoidingView style={[styles.formGroup, props.Containerstyle]}>
        <View style={styles.viewItem}>
          <Text style={styles.title}>{t('login.username')}</Text>
          <TextInput
            ref={userRef}
            value={props.username}
            onChangeText={(value: string) => props.ChangeUser(value)}
            placeholder={t('login.username')}
            style={styles.item}
          />
        </View>
        <View style={styles.viewItem}>
          <Text style={styles.title}>{t('login.password')}</Text>
          <TextInput
            ref={passRef}
            value={props.password}
            secureTextEntry={!show ? true : false}
            onChangeText={(value: string) => props.ChangePassWord(value)}
            placeholder={t('login.password')}
            style={styles.item}
          />
          <Icon
            name="visibility"
            type="material"
            onPress={() => setShow(!show)}
          />
        </View>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  formGroup: {
    flexDirection: 'column',
    rowGap: 15,
  },
  item: {
    fontSize: 17,
    fontWeight: '600',
  },
  viewItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    height: 50,
  },
  title: {
    position: 'absolute',
    top: -10,
    backgroundColor: white,
  },
});
