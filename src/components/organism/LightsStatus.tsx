import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoxSlide from '../molecule/BoxSlide'
import { WIDTH } from '../../assets/size'

export default function LightsStatus() {
  return (
    <View style={styles.container}>
      <BoxSlide
        icon='light'
        title='Đèn trần'
      />
      <BoxSlide
        icon='nightlight-round'
        title={'Đèn ngủ'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    rowGap:10,
    width: WIDTH / 1.2,
    borderRadius: 15,
    padding: 15,
    backgroundColor: '#282424'
  }
})