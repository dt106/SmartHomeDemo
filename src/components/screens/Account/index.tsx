/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import {useEffect} from 'react';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../../../assets/color/Color';
import Label from '../../atom/Label';
import {styles} from './styles';
import {TouchableHighlight} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import User from '../../../services/databases/SQLITE/User';
const user = new User();
type Props = PropsWithChildren<{
  route: any;
}>;
export default function Account(props: Props): JSX.Element {
  const {t} = useTranslation();
  const navigation: any = useNavigation();
  const handleNavigate = (value: string) => {
    navigation.navigate(value);
  };
  return (
    <LinearGradient
      colors={[Color.black, Color.parent, Color.parent, Color.yellow]}
      style={styles.container}>
      <View style={styles.account}>
        <Icon
          name="account"
          type="material-community"
          size={150}
          color={Color.yellow}
        />
      </View>
      <View style={styles.group}>
        <TouchableHighlight
          onPress={() => { handleNavigate('profile') }}
          style={styles.item}>
          <Label
            content={t('account.profile.title')}
            color={Color.yellow}
            size={16}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => handleNavigate('issue')}
          style={styles.item}>
          <Label content={t('account.feedback.feedback')} color={Color.yellow} size={16} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => handleNavigate('setting')}
          style={styles.item}>
          <Label content={t('account.setting.setting')} color={Color.yellow} size={16} />
        </TouchableHighlight>
      </View>
    </LinearGradient>
  );
}
