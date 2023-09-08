import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../assets/size'
import { black, parent } from '../../assets/color/Color'
import { white } from './../../assets/color/Color';

export default function Weather() {
  return (
    <View style = {styles.container}>
      <Text style = {{color: white}}>Thời tiết</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: WIDTH/1.1,
        height: HEIGHT/7,
        backgroundColor:black,
        marginTop: StatusBar.currentHeight,
        borderRadius: 15,   
    }
})