import { StyleSheet, Text, View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../assets/size'
import { black, white, yellow } from '../../assets/color/Color'
interface Props{
  style?: StyleProp<ViewStyle>
  title: string
  onPress?: ()=>void
}
export default function ButtonAdd(props: Props) {
  return (
    <TouchableOpacity onPress={props.onPress} style = {[styles.container,props.style]}>
      <Text style = {styles.title}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    width: WIDTH/1.5,
    height: HEIGHT/16,
    backgroundColor:yellow,
    bottom:WIDTH/7,
    alignSelf:'center',
    borderRadius: 15,
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    color: black,
    fontSize: 17,
    fontWeight: '600'
  }
})