import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import type {PropsWithChildren} from 'react'
import { HEIGHT, WIDTH } from '../../assets/size'
import { parent, white } from '../../assets/color/Color'
import Label from '../atom/Label'
import { light1 } from '../../assets/images/URL'
type Props = PropsWithChildren<{
  image: any,
  label: string,
  decription: string,
}>
export default function BoxDevice(props: Props) {
  return (
    <View style={styles.container}>
      <Image style={{ marginTop: 30,width: WIDTH/6, height:WIDTH/6, resizeMode:'contain'}} source={props.image}/>
      <View>
        <Label
          content={props.label}
          color={white}
          size={20}
        />
        <Text style={styles.title}>{props.decription}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH / 2.3,
    height: HEIGHT / 3.9,
    backgroundColor: parent,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: 20
  },
  title: {
    color: 'grey',
    alignSelf: 'center'
  }
})