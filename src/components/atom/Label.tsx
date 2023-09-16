import {StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import {StyleProps} from 'react-native-reanimated';
import { black } from '../../assets/color/Color';

interface Props {
  content: string;
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
}

export default function Label(props: Props) {
  return (
    <View>
      <Text
        style={[
          {color: !props.color?black:props.color, fontSize: props.size, fontWeight: '600'},
          props.style,
        ]}>
        {props.content}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
