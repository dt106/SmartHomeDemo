import {
  FlatList,
  RefreshControl,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React, {PropsWithChildren, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
type Props = PropsWithChildren<{
  data?: any;
  children: any;
  style?: StyleProp<ViewStyle>;
  styleItem?:StyleProp<ViewStyle>;
  column?: number;
  refreshing?: boolean;
  onRefresh?: () => void;
}>;

export default function Home_List(props: Props) {
  const [refreshing, setRefresh] = useState(props.refreshing);
  const handleFresh = () => {
    if (props.onRefresh) props.onRefresh();
    setTimeout(() => {
      // setRefresh(false);
    }, 500);
  };
  useEffect(() => {
    setRefresh(false);
  },[props.refreshing]);
  return (
    <SafeAreaView>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={props.refreshing!}
            onRefresh={handleFresh}></RefreshControl>
        }
        data={props.data}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={!props.column ? 2 : props.column}
        contentContainerStyle={styles.list}
        style={props.style}
        renderItem={item => {
          return (
            <View style={[styles.viewBox, props.styleItem]}>
              {React.cloneElement(props.children, {data: item.item})}
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
