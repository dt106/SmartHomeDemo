import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../assets/size'
import { Icon, Button } from 'react-native-elements'
import { black, white } from '../../assets/color/Color'
import Switch from '../atom/Switch'
import BoxStatus from '../molecule/BoxStatus'
import Header from '../organism/Header'
import LightsStatus from '../organism/LightsStatus'
import LinearGradient from 'react-native-linear-gradient'

export default function MainTemplate() {
    return (
        <LinearGradient
            colors={['#211D1D', black, '#828282']}
            start={{x: 0.5, y: 0.6}}
            style={styles.container}>
            <View style={styles.viewImage}>
                <Image
                    source={require('../../assets/images/image7.png')}
                    style={{ width: WIDTH, resizeMode: 'stretch' }}
                />
            </View>
            <View style={styles.header}>
                <Header
                    title='Phòng ngủ'
                />
            </View>
            <View style={styles.main}>
                <View style={styles.box}>
                    <BoxStatus
                        image='drop'
                        decription='Độ ẩm'
                        percent={10}
                    />
                    <BoxStatus
                        image={'wind'}
                        decription='Điều hoà không khí'
                        percent={100}
                    />
                </View>
                <View>
                    <LightsStatus />
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: WIDTH,
        height: HEIGHT,
    },
    header: {
        position: 'absolute',
        width: WIDTH,
        height: HEIGHT / 12,
    },
    viewImage: {
        width: WIDTH,
        height: HEIGHT / 2.1,
    },
    main: {
        width: WIDTH / 1.2,
        alignSelf: 'center',
        flexDirection: 'column',
        rowGap: 10,
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tabBar: {
        position: 'absolute',
        width: WIDTH,
        height: 50,
        bottom: 0,
        backgroundColor: white
    },

})
