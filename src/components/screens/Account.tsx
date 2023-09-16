/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH} from '../../assets/size';
import {useEffect} from 'react';
import {Icon} from 'react-native-elements';
import {black, white, yellow} from '../../assets/color/Color';
import {arrInfo} from '../../data/arrayInfo';
export default function Main({route}: {route: any}): JSX.Element {
  const data: any = route.params;
  useEffect(() => {});
  return (
    <SafeAreaView style={styles.container}>
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
              <Text>{data[doc]}</Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: white,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
  },
  account:{
    borderRadius:50,
    backgroundColor:'white',
  },
  group: {
    flexDirection: 'column',
    rowGap: 15,
  },
  item: {
    width: WIDTH / 1.5,
    height: HEIGHT / 12,
    backgroundColor: 'white',
    shadowColor: black,
    shadowRadius: 15,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});
