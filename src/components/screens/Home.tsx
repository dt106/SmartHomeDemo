import { FlatList, Modal, StatusBar, StyleSheet, ToastAndroid, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { HEIGHT, WIDTH } from '../../assets/size'
import LinearGradient from 'react-native-linear-gradient'
import type { PropsWithChildren } from 'react'
import Weather from '../molecule/Weather'
import RoomDB from '../../services/databases/Room'
import ButtonAdd from '../atom/ButtonAdd'
import ModalAdd from '../molecule/ModalAdd'
import { useDispatch, useSelector } from 'react-redux'
import BoxRoom from '../molecule/BoxRoom'
import { mapping } from '../../assets/images/URL'
import { black } from '../../assets/color/Color'
import { RefreshControl } from 'react-native-gesture-handler'
import { setImage, setName, setRefresh } from '../../redux/slices/Room'
import { useTranslation } from 'react-i18next'
const roomDB = new RoomDB();

type Props = PropsWithChildren<{
    navigation: any
}>
export default function Home(props: Props) {
    const [data, setData]: any = useState([])
    const [modal, setModal] = useState(false)
    const {t} = useTranslation();
    const name = useSelector((state: any) => state.Room.name);
    const image = useSelector((state: any) => state.Room.image);
    const isRefresh = useSelector((state: any)=> state.Room.isRefresh);
    const dispatch = useDispatch();
    const DeleteStatus = () => {
        dispatch(setName(''));
        dispatch(setImage(''));
    }
    const handleCancle = async () => {
        setModal(false);
        DeleteStatus();
    }
    const handleSave = async () => {
        if(name !== '' && image !== ''){
            await roomDB.InsertRoom(name, image);
            setModal(false);
            DeleteStatus();
            dispatch(setRefresh(true));
        }
        else{
            ToastAndroid.show('Nhập đủ thông tin!', ToastAndroid.SHORT);
        }
    }
    const onRefresh = useCallback(() => {
        dispatch(setRefresh(true));
    }, [])
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
        dispatch(setRefresh(false))
    }, [isRefresh])
    return (
        <LinearGradient
            colors={['#211D1D', '#828282']}
            start={{ x: 0.5, y: 0.6 }}
            style={styles.container}
        >
            <Weather title={t('home.weather')}/>
            <View style = {styles.main}>
                <FlatList
                    refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={onRefresh} />}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    style={{ height: HEIGHT / 3 }}
                    renderItem={(item: any) => {
                        return (
                            <View style={styles.viewBox}>
                                <BoxRoom
                                    key={item.index}
                                    navigation={props.navigation}
                                    image={mapping[item.item.Image]}
                                    route={item.item}
                                />
                            </View>
                        )
                    }}>
                </FlatList>
            </View>
            <ButtonAdd
                title={t('home.btnadd')}
                onPress={() => setModal(true)}
            />
            <Modal
                visible={modal}
                transparent
            >
                <ModalAdd
                    Cancle={handleCancle}
                    Save={handleSave}
                />
            </Modal>
        </LinearGradient >
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
        width: WIDTH / 1,
        height: HEIGHT / 1.71,
    },
    viewBox: {
        width: WIDTH / 2,
        height: HEIGHT / 3.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
})