import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props{
    content: string,
    color?: string,
    size?: number
}

export default function Label(props: Props) {
  return (
    <View>
      <Text style = {{color: props.color, fontSize:props.size, fontWeight:'600'}}>{props.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})