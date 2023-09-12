import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../assets/size'
import Label from '../atom/Label'
import { black, parent, white } from '../../assets/color/Color'
import FormAdd from './FormAdd'
import LinearGradient from 'react-native-linear-gradient'
interface Props {
    Cancle: () => void
    Save: () => void
}
export default function ModalAdd(props: Props) {
    return (
        <LinearGradient colors={['#696969', black, '#696969']} style={styles.container}>
            <Label
                content='Thêm phòng điều khiển'
                color={'#F5F5F5'}
                size={WIDTH / 22}
            />
            <View style={{ marginTop: HEIGHT / 20 }}>
                <FormAdd />
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity onPress={props.Save}>
                    <Label content='Lưu' color='#F5F5F5' />
                </TouchableOpacity>
                <TouchableOpacity onPress={props.Cancle}>
                    <Label content='Huỷ' color='#F5F5F5' />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        width: WIDTH / 1.2,
        height: HEIGHT / 2,
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 20,
        alignSelf: 'center',
        // backgroundColor: '#696969',
        borderRadius: 20,
        elevation: 25,
        shadowColor: white,
        padding: 20,
    },
    btnView: {
        height: HEIGHT / 20,
        // backgroundColor:white,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        columnGap: WIDTH / 3,
        justifyContent: 'space-between',
        alignItems:'center'
    }
})