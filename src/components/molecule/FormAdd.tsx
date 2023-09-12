import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { black, parent, white, yellow } from '../../assets/color/Color'
import { HEIGHT, WIDTH } from '../../assets/size'
import Label from '../atom/Label'
import { mapping } from '../../assets/images/URL'
import { useDispatch, useSelector } from 'react-redux'
import { setImage, setName } from '../../redux/slices/Room'

export default function FormAdd() {
    const dispatch = useDispatch();
    const arr = Object.keys(mapping);
    const name = useSelector((state: any) => state.Room.name);
    const image = useSelector((state: any) => state.Room.image);
    const handleChangeText = (value: string) => {
        dispatch(setName(value));
    }
    const handleImage = (value: string) =>{
        dispatch(setImage(value));
    }
    useEffect(() => {
    }, [image])
    return (
        <View style={styles.container}>
            <View style={styles.name}>
                <TextInput
                    value={name}
                    placeholderTextColor={'#F5F5F5'}
                    onChangeText={(value: string) => handleChangeText(value)}
                    style={{ color: '#F5F5F5' }} placeholder='Nhập tên...' />
            </View>
            <View>
                <Label
                    content='Chọn ảnh'
                    color='white'
                />
                <FlatList
                    data={arr}
                    style={styles.imageBox}
                    keyExtractor={(doc: any, index) => index.toString()}
                    renderItem={(item: any) => {
                        const selected = item.item === image
                        return (
                            <TouchableOpacity 
                            onPress={()=>handleImage(item.item)} 
                            style={[styles.imageView, selected?{backgroundColor:yellow}:{}]}>
                                <Label content={item.item} color='white' />
                                <Image style={styles.image} resizeMode='stretch' source={mapping[item.item]} />
                            </TouchableOpacity>
                        )
                    }}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH / 1.3,
    },
    name: {
        // borderWidth: 0.5,
        borderRadius: 15,
        borderColor: '#F5F5F5',
        paddingLeft: 5,
    },
    imageBox: {
        width: WIDTH / 1.3,
        height: HEIGHT / 4.3,
    },
    imageView: {
        width: WIDTH / 1.3,
        height: HEIGHT / 6,
        overflow: 'hidden',
        justifyContent: 'flex-end',
    },
    image: {
        width: WIDTH / 1.3,
        height: WIDTH / 4,
    }

})