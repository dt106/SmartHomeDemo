/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusBar, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {HEIGHT, WIDTH} from '../../assets/size';
import {useEffect} from 'react';
import {Icon} from 'react-native-elements';
import {black, white, yellow} from '../../assets/color/Color';
import {arrInfo} from '../../data/arrayInfo';
import LinearGradient from 'react-native-linear-gradient';
import Label from '../atom/Label';
import User from '../../services/databases/User';
const user = new User();
export default function Main({route}: {route: any}): JSX.Element {
  const email: any = route.params.email;
  const [data, setData] : any= useState({});
  useEffect(() => {
    async function GetUSer(){
      const response: any =await user.GetUser(email);
        switch (response.Gender) {
          case 1:
            response.Gender = 'Nam'
            break;
          case 2:
            response.Gender = 'Nữ'
            break;
          default:
            response.Gender = 'Không rõ'
            break;
        }
      setData(response);
    }
    GetUSer();
  },[]);
  return (
    <LinearGradient   colors={['#211D1D', black, '#828282']} style={styles.container}>
      <View style = {styles.account}>
        <Icon
          name="account"
          type="material-community"
          size={150}
          color={yellow}
        />
      </View>
      <View style={styles.group}>
        {arrInfo.map((doc: any) => {
          return (
            <View key={doc} style={styles.item}>
              <Label content={doc} color={white}/>
              <Text style = {{color: white}}>{data[doc]}</Text>
            </View>
          );
        })}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
  },
  account:{
    borderRadius:50,
  },
  group: {
    flexDirection: 'column',
    rowGap: 15,
  },
  item: {
    width: WIDTH / 1,
    height: HEIGHT / 12,
    shadowColor: white,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    paddingHorizontal: 15,
    backgroundColor:black
  },
});
