import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../assets/size'
import LinearGradient from 'react-native-linear-gradient'
import { black } from '../../assets/color/Color'
import BoxRoom from '../molecule/BoxRoom'
import type { PropsWithChildren } from 'react'
import Weather from '../molecule/Weather'
type Props = PropsWithChildren<{
    navigation: any
}>
export default function Home(props: Props) {
    return (
        <LinearGradient
            colors={['#211D1D', black, '#828282']}
            start={{ x: 0.5, y: 0.6 }}
            style={styles.container}
        >
            <Weather/>
            <View style={styles.main}>
                <BoxRoom
                    title='Phòng khách'
                    navigation={props.navigation}
                />
                <BoxRoom
                    title='Phòng ngủ'
                    navigation={props.navigation}
                />
                <BoxRoom title='Phòng ngủ 2'
                    navigation={props.navigation}
                />
                <BoxRoom title='Hành lang'
                    navigation={props.navigation}

                />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT,
        alignItems: 'center',
    },
    main: {
        width: WIDTH / 1.1,
        flexDirection: 'row',
        marginTop: StatusBar.currentHeight,
        flexWrap: 'wrap',
        gap: HEIGHT / 45,
    }
})