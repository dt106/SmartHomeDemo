import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Label from '../atom/Label'
import { Color } from '../../assets/color/Color'
interface Props{
  quantity?: number
} 

export default function HeaderDevice(props: Props) {
  return (
    <View style = {styles.header}>
        <Label
        content='Tìm kiếm'
        color={Color.white}
        size={30}
        />
        <Text style = {styles.quantity}>{props.quantity} Thiết bị</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    header:{
        marginTop: StatusBar.currentHeight,
    
    },
    quantity:{
        color: Color.white
    }
})