import {
  Animated,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Color} from '../../assets/color/Color';
import Label from './Label';
interface Props {
  textActive?: string;
  textInActive?: string;
  valueChange?: (value: boolean) => void;
  disible?: boolean;
  value: boolean;
}
export default function Switch(props: Props) {
  const x = props.value === true ? 30 : 0;
  const [enable, setEnable] = useState(props.value);
  // const pan: any = useRef(new Animated.ValueXY({x: x, y: 0})).current;
  // const panResponder = useRef(
  //   PanResponder.create({
  //     onMoveShouldSetPanResponder: () => true,
  //     onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
  //       useNativeDriver: false,
  //     }),
  //     onPanResponderRelease: () => {
  //       const moveX = pan.x._value;
  //       const moveY = pan.y._value;

  //       const minY = 0;
  //       const maxY = 30;

  //       let adjustedX;
  //       if (moveX <= 15) {
  //         adjustedX = 0;
  //         setEnable(false);
  //         if (props.valueChange) props.valueChange(false);
  //       } else {
  //         adjustedX = 30;
  //         setEnable(true);
  //         if (props.valueChange) props.valueChange(true);
  //       }
  //       const adjustedY = Math.max(minY, Math.min(moveY, maxY));
  //       Animated.spring(pan, {
  //         toValue: {x: adjustedX, y: adjustedY},
  //         useNativeDriver: false,
  //       }).start();
  //     },
  //   }),
  // ).current;
  const handlepress = () => {
    setEnable(!enable);
    if (props.valueChange)
    props.valueChange(!enable)
  };
  useEffect(() => {}, []);
  return (
    <TouchableOpacity
      onPress={handlepress}
      style={[styles.container, {backgroundColor: enable ? Color.black : Color.yellow}]}>
      <View style={[styles.textView]}>
        <Label
          content={props.textActive ? props.textActive : ''}
          style={{display: enable ? 'flex' : 'none', color: Color.yellow}}
        />
        <Label
          content={props.textInActive ? props.textInActive : ''}
          style={{display: !enable ? 'flex' : 'none', color: Color.black}}
        />
      </View>
        <View
          style={[
            styles.switch,
            enable?styles.enable:styles.block,
          ]}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 30,
    backgroundColor: Color.black,
    borderRadius: 25,
    justifyContent: 'center',
    elevation: 15,
    shadowColor: 'black',
  },
  switch: {
    width: 25,
    height: 25,
    backgroundColor: Color.black,
    borderRadius: 100,
    elevation: 20,
    shadowColor: 'black',
    position:'absolute'
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  enable: {
    right: 5,
    backgroundColor: Color.yellow,
    alignSelf:'flex-end'
  },
  block:{
    left: 5,
    backgroundColor:Color.black,
    alignSelf:'flex-start'
  }
});
