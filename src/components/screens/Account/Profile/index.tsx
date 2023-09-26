import {Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {styles} from './styles';
import Header from '../../../organism/Header';
import Label from '../../../atom/Label';
import {arrInfo} from '../../../../data/arrayInfo';
import {Color} from '../../../../assets/color/Color';
import {useTranslation} from 'react-i18next';
import User from '../../../../services/databases/SQLITE/User';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

const userST = new User();

export default function Profile() {
  const [info, setInfo]: any = useState({});
  const {t} = useTranslation();
  const emaillogin = useSelector((state: any) => state.User.email);
  useEffect(() => {
    async function Get() {
      const response = await userST.GetUser(emaillogin);
      setInfo(response);
    }
    Get();
  }, []);
  return (
    <View style={styles.container}>
      <Header title={t('account.profile.title')} />
      <View style={styles.group}>
        <FlatList
          data={arrInfo}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => {
            return (
              <View style={styles.item}>
                <Label
                  content={t(`account.profile.${item.item}`)}
                  color={Color.yellow}
                />
                <Text style={styles.info}>{info[item.item]}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
