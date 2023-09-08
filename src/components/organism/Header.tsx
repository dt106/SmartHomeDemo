import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { white } from '../../assets/color/Color'
import { useNavigation } from '@react-navigation/native'
interface Props {
    title?: string
}
export default function Header(props: Props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Icon name='chevron-back' type='ionicon' color={white} size={28} onPress={()=>navigation.goBack()}/>
            <Text style={styles.titleAlign}>{props.title}</Text>
            <Icon name='home' type='ionicon' color={white} size={28}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:StatusBar.currentHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:10
    },
    titleAlign: {
        color: white,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '600'
    }
})