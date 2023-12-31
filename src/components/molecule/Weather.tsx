import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../assets/size'
import { Color } from './../../assets/color/Color';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import Label from '../atom/Label';
interface Props{
  title: string
}
export default function Weather(props: Props) {
  return (
    <LinearGradient colors={['#1E90FF', Color.white]} style={styles.container}>
      <View style = {styles.titleView}>
      <Text style={{ color: Color.yellow }}>{props.title}</Text>
      <View style = {styles.location}>
        <Label
        content='Hà Nội'
        color={Color.yellow}
        />
        <Icon
          name='location'
          type='evilicon'
          color={Color.yellow}
        />
      </View>
      </View>
      <View style={styles.weatherView}>
        <Icon
          name='partly-sunny-outline'
          type='ionicon'
          color={Color.yellow}
          size={WIDTH / 8}
        />
        <View style={styles.celsiusView}>
          <Label
            content='10'
            color={Color.yellow}
            size={WIDTH / 12}
          />
          <Icon
            name='temperature-celsius'
            type='material-community'
            color={Color.yellow}
            size={WIDTH / 11}
          />
        </View>

      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH / 1.1,
    height: HEIGHT / 7,
    marginTop: StatusBar.currentHeight,
    borderRadius: 15,
    padding: 10,
  },
  weatherView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  titleView:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  location:{
    flexDirection:'row'
  },
  celsiusView: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})