import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { black, white } from '../../assets/color/Color'
import { HEIGHT, WIDTH } from '../../assets/size'
import HeaderDevice from '../molecule/HeaderDevice'
import BoxDevice from '../molecule/BoxDevice'
import { arrImage } from '../../data/arrDevices'
import ButtonAdd from '../atom/ButtonAdd'

export default function DeviceScreen(): JSX.Element {
  return (
    <LinearGradient
      colors={['#211D1D', black, '#828282']}
      start={{ x: 0.5, y: 0.6 }}
      style={styles.container}
    >
      <HeaderDevice
        quantity={arrImage.length}
      />
      <FlatList
        data={arrImage}
        keyExtractor={(doc: any, index: number) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ gap: 20, marginVertical: 10, }}
        renderItem={({ item, index }) => {
          return (
            <BoxDevice
              label={item.label}
              decription={item.decription}
              image={item.image}
            />
          )
        }}
      />
      <ButtonAdd />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    padding: 15,
  },
  header: {
    marginTop: StatusBar.currentHeight,

  },
  quantity: {
    color: white
  },
  main: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  }
})