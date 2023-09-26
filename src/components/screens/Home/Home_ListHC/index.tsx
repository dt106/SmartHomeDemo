import React, {PropsWithChildren, useState} from 'react';
import {styles} from './styles';
import Home_List from '../../../organism/Home_List';
import Home_BoxHC from '../../../molecule/Home_BoxHC';
import HCDTO from '../../../../services/databases/DTO/HCDTO';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../../../../assets/color/Color';
import {WIDTH} from '../../../../assets/size';
import Header from '../../../organism/Header';
import {Icon} from 'react-native-elements';
import { useTranslation } from 'react-i18next';
type Props = PropsWithChildren<{
  route?: any;
  navigation?: any;
}>;
export default function Home_ListHC(props: Props) {
  const data: HCDTO[] = props.route.params.data;
  const {t} = useTranslation();
  const handlePress = (value: any) => {
    props.navigation.navigate('List_Device', {data: value});
  };
  return (
    <LinearGradient
      colors={[Color.black, Color.parent, Color.parent, Color.yellow]}
      style={styles.container}>
      <Header
        title={t('home.hc.title')}
        icon={
          <Icon
            name="add-box"
            type="material"
            size={28}
            color={Color.yellow}
            onPress={() => {}}
          />
        }
      />
      <Home_List
        column={1}
        data={data}
        style={{}}
        children={<Home_BoxHC onPress={value => handlePress(value)} />} onRefresh={function (): void {
          throw new Error('Function not implemented.');
        } }      />
    </LinearGradient>
  );
}
