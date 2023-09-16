import {
  Animated,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {black, yellow} from '../../assets/color/Color';
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
  const pan: any = useRef(new Animated.ValueXY({x: x, y: 0})).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        const moveX = pan.x._value;
        const moveY = pan.y._value;

        const minY = 0;
        const maxY = 30;

        let adjustedX;
        if (moveX <= 15) {
          adjustedX = 0;
          setEnable(false);
          if (props.valueChange) props.valueChange(false);
        } else {
          adjustedX = 30;
          setEnable(true);
          if (props.valueChange) props.valueChange(true);
        }
        const adjustedY = Math.max(minY, Math.min(moveY, maxY));
        Animated.spring(pan, {
          toValue: {x: adjustedX, y: adjustedY},
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;
  useEffect(() => {}, []);
  return (
    <View style={[styles.container, {backgroundColor:enable?black:yellow}]}>
      <View style={[styles.textView]}>
        <Label
          content={props.textActive?props.textActive:''}
          style={{display: enable ? 'flex' : 'none', color: yellow}}
        />
        <Label
          content={props.textInActive?props.textInActive:''}
          style={{display: !enable ? 'flex' : 'none', color: black}}
        />
      </View>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}],
          position: 'absolute',
        }}
        {...panResponder.panHandlers}>
        <TouchableOpacity
          style={[
            styles.switch,
            {backgroundColor: enable ? yellow : black},
          ]}></TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 30,
    backgroundColor: black,
    borderRadius: 25,
    justifyContent: 'center',
    elevation: 15,
    shadowColor: 'black',
  },
  switch: {
    width: 25,
    height: 25,
    backgroundColor: black,
    borderRadius: 50,
    marginHorizontal: 5,
    elevation: 20,
    shadowColor: 'black',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
