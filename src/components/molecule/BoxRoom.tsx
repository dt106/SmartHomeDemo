import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../assets/size'
import { black, parent, white } from '../../assets/color/Color'
import { Icon } from 'react-native-elements'
interface Props{
    title: string
    navigation: any
}
export default function BoxRoom(props: Props) {
  return (
    <TouchableOpacity 
    style = {styles.container}
    onPress={()=>props.navigation.navigate('Room')}
    >
        <Text style = {{color: white}}>{props.title}</Text>
        <Icon name='living'/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        width: WIDTH / 2.3,
        height: HEIGHT / 3.9,
        backgroundColor: black,
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'column',
        rowGap: 20
    }
})