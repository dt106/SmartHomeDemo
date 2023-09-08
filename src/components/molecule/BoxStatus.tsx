import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../assets/size'
import { parent, white } from '../../assets/color/Color'
import Switch from '../atom/Switch'
import Label from '../atom/Label'
import { Icon } from 'react-native-elements'
type imageString = 'drop' | 'wind'
interface Props {
    style?: StyleProp<ViewStyle>
    image?: imageString | undefined
    decription?: string
    percent?: number 
}

export default function BoxStatus(props: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.airStatus}>
                <Label
                    content={`${props.percent||0}%`}
                    color={white}
                    size={34}
                />
                <Icon
                    name={props.image!}
                    type={props.image === 'drop' ? 'simple-line-icon' : 'feather'}
                    color={white}
                    size={30}
                />
            </View>
            <Text style = {styles.airTitle}>{props.decription}</Text>
            <View style={styles.viewSwitch}>
                <Text style={styles.title}>On</Text>
                <Switch />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH / 2.6,
        height: HEIGHT / 4.2,
        backgroundColor: '#282424',
        borderRadius: 15,
        padding: 15,
        flexDirection:'column',
        rowGap: 10
    },
    airStatus: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    airTitle:{
        color: white
    },
    viewSwitch: {
        width: WIDTH / 3,
        alignSelf: 'center',
        position: 'absolute',
        borderTopWidth: 1,
        borderStyle:'dotted',
        borderColor: white,
        bottom: 0,
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingVertical: 10,
        alignItems: 'center'
    },
    title: {
        color: white
    }
})