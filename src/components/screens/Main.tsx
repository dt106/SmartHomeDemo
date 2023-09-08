/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { HEIGHT, WIDTH } from '../../assets/size';

export default function Main(): JSX.Element {
  return (
    <SafeAreaView style = {styles.container}>
      <Text>Main</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        width: WIDTH,
        height: HEIGHT,
        backgroundColor:'pink',
    },
});
