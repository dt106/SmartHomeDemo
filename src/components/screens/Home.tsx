import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HEIGHT, WIDTH } from '../../assets/size'
import LinearGradient from 'react-native-linear-gradient'
import { black } from '../../assets/color/Color'
import BoxRoom from '../molecule/BoxRoom'
import type { PropsWithChildren } from 'react'
import Weather from '../molecule/Weather'
import { living, lobby, mapping } from '../../assets/images/URL'
import RoomDB from '../../services/Room'
const roomDB = new RoomDB();

type Props = PropsWithChildren<{
    navigation: any
}>
export default function Home(props: Props) {
    const [data, setData]: any = useState([])
    useEffect(() => {
        async function GetData() {
            const lst = roomDB.GetAllRoom()
            lst.then((doc) => {
                let arr: any = []
                doc[0].rows.raw().map(item => {
                    arr.push(item)
                })
                setData(arr)
            })
        }
        GetData();
    }, [])
    return (
        <LinearGradient
            colors={['#211D1D', '#828282']}
            start={{ x: 0.5, y: 0.6 }}
            style={styles.container}
        >
            <Weather />
            <View style={styles.main}>
                {
                    data.map((doc: any) => {
                        const num:any = doc.Image
                        return (
                            <BoxRoom
                                key={doc.ID}
                                title={doc.Name}
                                navigation={props.navigation}
                                image={mapping[num]}
                            />
                        )
                    })
                }
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT,
        alignItems: 'center',
        flexDirection: 'column',
        rowGap: 30,
        paddingTop: 20,
    },
    main: {
        width: WIDTH / 1.1,
        flexDirection: 'row',
        marginTop: StatusBar.currentHeight,
        flexWrap: 'wrap',
        gap: HEIGHT / 45,
    }
})