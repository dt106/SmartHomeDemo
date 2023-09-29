import {Modal, ToastAndroid, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import Header from '../../../organism/Header';
import SmartAPI from './../../../../services/axios';
import Home_List from '../../../organism/Home_List';
import Account_BoxIssue from '../../../molecule/Account_BoxIssue';
import {Icon} from 'react-native-elements';
import {Color} from '../../../../assets/color/Color';
import Label from '../../../atom/Label';
import IssueModaAdd from '../../../organism/Account_Issue_ModalAdd';
import {useTranslation} from 'react-i18next';
import IssueDTO from '../../../../services/databases/DTO/Issue';
const API = new SmartAPI();
export default function Issue() {
  const [count, setCount]: any = useState();
  const [title, setTitle] = useState('');
  const [issue, setIssue] = useState('');
  const [data, setData]: any = useState([]);
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [itemData, setItem]: any = useState();
  const {t} = useTranslation();
  const handleModal = () => {
    setShow(true);
  };
  const handleEdit = (value: IssueDTO) => {
    setShow(true);
    setItem(value);
  };
  const handleSave = async () => {
    if (title !== '' && issue !== '') {
      let response: any = {};
      if (!itemData) {
        response =await API.CreateIssue(title, issue);
      } else {
        response =await API.UpdateIssue(itemData.id, title, issue);
      }
      if (response?.status === 200) {
        ToastAndroid.show('Thêm thành công', ToastAndroid.SHORT);
        setShow(false);
        handleRefresh();
        setTitle('');
        setIssue('');
        setItem(null);
      } else {
        ToastAndroid.show(t('account.feedback.modaladd.faild'), ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show(
        t('account.feedback.modaladd.warning'),
        ToastAndroid.SHORT,
      );
    }
  };
  const handleCancle = () => {
    setShow(false);
    setTitle('');
    setIssue('');
  };
  const handleRefresh = () => {
    setRefresh(true);
    API.GetListIssue().then(doc => {
      setData(doc);
      setCount(doc?.length);
      setRefresh(false);
    });
  };
  useEffect(() => {
    API.GetListIssue().then(doc => {
      setData(doc);
      setCount(doc?.length);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Header
        title={t('account.feedback.feedback')}
        icon={
          <Icon
            name="add-box"
            type="material"
            size={28}
            color={Color.yellow}
            onPress={handleModal}
          />
        }
      />
      <View style={styles.boxQuantity}>
        <Label content={count} color={Color.yellow} style={styles.quantity} />
        <Icon
          name="circle-o"
          type="font-awesome"
          size={150}
          color={Color.black}
          style={styles.icon}
        />
      </View>
      <View>
        <Home_List
          refreshing={refresh}
          onRefresh={() => handleRefresh()}
          style={styles.lst}
          data={data}
          column={1}
          styleItem={{margin: 0, elevation: 10, shadowColor: Color.white}}
          children={
            <Account_BoxIssue
              edit={value => handleEdit(value)}
              response={value => handleRefresh()}
            />
          }
        />
      </View>
      <Modal
        visible={show}
        transparent
        statusBarTranslucent
        animationType="fade">
        <IssueModaAdd
          data={itemData}
          title={value => setTitle(value)}
          issue={value => setIssue(value)}
          onSave={handleSave}
          onCancle={handleCancle}
        />
      </Modal>
    </View>
  );
}
