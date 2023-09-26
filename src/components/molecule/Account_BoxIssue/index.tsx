import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Animated,
} from 'react-native';
import React, {PropsWithChildren, useEffect, useState} from 'react';
import {styles} from './styles';
import Label from '../../atom/Label';
import {Color} from '../../../assets/color/Color';
import {Icon, ListItem} from 'react-native-elements';
import IssueDTO from '../../../services/databases/DTO/Issue';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Button from '../../atom/Button';
import SmartAPI from '../../../services/axios';
import { useTranslation } from 'react-i18next';
type Props = PropsWithChildren<{
  data?: IssueDTO;
  response?: (value: boolean) => void;
}>;

const API = new SmartAPI();

export default function Account_BoxIssue(props: Props) {
  const [name, setName] = useState('smile-circle');
  const {t} = useTranslation();
  const handleDelete = async () => {
    const response = await API.DeleteIssue(props.data);
    if (response?.status === 200) {
      ToastAndroid.show( t('account.feedback.deletesuccessful'), ToastAndroid.SHORT);
      if (props.response) props.response(true);
    } else {
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  const rightWipe = () => (
    <Button
      children={<Icon name="delete" color={Color.white} />}
      style={styles.btn}
      onPress={handleDelete}
    />
  );
  useEffect(() => {
    switch (props.data?.issueStatusId) {
      case 0:
        setName('frown');
        break;
      case 1:
        setName('meho');
        break;
      default:
        break;
    }
  }, []);
  return (
    <Swipeable renderRightActions={rightWipe}>
      <View style={[styles.container, {paddingHorizontal: 15}]}>
        <View>
          <Label content={props.data?.title} color={Color.yellow} />
          <Text style={styles.description}>
            {props.data?.description.split('\n')}
          </Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.statusTitle}>{props.data?.issueStatus.name}</Text>
          <Icon name={name} type="ant-design" color={'green'} size={20} />
        </View>
      </View>
    </Swipeable>
  );
}
