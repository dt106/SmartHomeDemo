import { FlatList, StatusBar, StyleSheet} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Color } from '../../assets/color/Color'
import { HEIGHT, WIDTH } from '../../assets/size'
import HeaderDevice from '../molecule/HeaderDevice'
import { arrImage } from '../../data/arrDevices'
import { useTranslation } from 'react-i18next'

export default function DeviceScreen(): JSX.Element {
  const {t} = useTranslation();
  return (
    <LinearGradient
      colors={['#211D1D', Color.black, '#828282']}
      start={{ x: 0.5, y: 0.6 }}
      style={styles.container}
    >
      <HeaderDevice
        quantity={arrImage.length}
      />
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
    color: Color.white
  },
  main: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  }
})