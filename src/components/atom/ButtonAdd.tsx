import { StyleSheet, Text, View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../assets/size'
import { black, white, yellow } from '../../assets/color/Color'
interface Props{
  style?: StyleProp<ViewStyle>
}
export default function ButtonAdd(props: Props) {
  return (
    <TouchableOpacity style = {[styles.container,props.style]}>
      <Text style = {styles.title}>Thêm thiết bị</Text>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  container:{
    width: WIDTH/1.5,
    height: HEIGHT/16,
    backgroundColor:yellow,
    marginBottom:WIDTH/9,
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