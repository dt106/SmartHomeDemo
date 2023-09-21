import { FlatList, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HEIGHT } from '../../../assets/size'
import { styles } from './styles'
type Props= PropsWithChildren<{
  data?: any,
  children: any,
  style?: StyleProp<ViewStyle>
}>

export default function Home_List(props: Props) {
  return (
    <SafeAreaView>
      <FlatList 
      data={props.data}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      contentContainerStyle = {{}}
      style={props.style}
      renderItem={item => {
        return (
          <View style = {styles.viewBox}>
            {
              React.cloneElement( props.children,{data: item.item})
            }
          </View>
        );
      }}
    />
    </SafeAreaView>
  )
}

