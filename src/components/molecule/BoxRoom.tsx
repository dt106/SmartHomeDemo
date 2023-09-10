import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../assets/size'
import { black, parent, white, yellow } from '../../assets/color/Color'
import { Icon } from 'react-native-elements'
import Label from '../atom/Label'
import { Image } from 'react-native'
import { bed, living } from '../../assets/images/URL'
interface Props {
  title: string
  navigation: any
  image?: any
}
export default function BoxRoom(props: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.navigation.navigate('Room',{name: props.title})}
    >
      <Label
        content={props.title}
        color={yellow}
        size={WIDTH / 20}
      />
      <Image
        source={props.image?props.image:bed}
        style={styles.image}
        resizeMode='cover'
      />
    </TouchableOpacity>
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
    rowGap: 20,
    paddingTop: 15,
    elevation: 15,
    shadowColor: white,
    overflow: 'hidden'
  },
  image: {
    width: WIDTH / 2.3,
    borderWidth: 1,
  }
})