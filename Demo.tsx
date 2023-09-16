import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import {HEIGHT, WIDTH} from './src/assets/size';
import i18n from './src/languages/i18next';
import {useTranslation} from 'react-i18next';

const MyScreen = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t('overloading.label')}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MyScreen;
