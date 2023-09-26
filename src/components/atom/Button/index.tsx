import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {styles} from './styles';
import Label from '../Label';

type Props = PropsWithChildren<{
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: ()=>void;
  title?: string;
}>;
export default function Button(props: Props) {
  const title = props.title
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container,props.style]}>
      {props.children ?props.children:(<Label content={title?title:'Button'} color='white'/>)}
    </TouchableOpacity>
  );
}
