import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoxSlide from '../molecule/BoxSlide'
import { WIDTH } from '../../assets/size'
import { parent } from '../../assets/color/Color'

export default function LightsStatus() {
  return (
    <View style = {styles.container}>
      <BoxSlide
      name='light'
      />
      <BoxSlide
      name='nightlight-round'
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:WIDTH/1.2,
        borderRadius: 15,
        padding: 15,
        backgroundColor: '#282424'
    }
})