import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, Slider } from 'react-native-elements'
import { black, white, yellow } from '../../assets/color/Color'
import Label from '../atom/Label'
import { WIDTH } from '../../assets/size'
interface Props {
    name: string
    type?: string
}
export default function BoxSlide(props: Props) {
    return (
        <View style={styles.container}>
            <Label
                content='Đèn trần'
                color={white}
            />
            <View style = {{flexDirection:'row', justifyContent:'space-between', alignItems:"center"}}>
                <Slider
                    thumbTintColor={yellow}
                    minimumValue={0}
                    maximumValue={100}
                    maximumTrackTintColor={white}
                    minimumTrackTintColor={yellow}
                    style={{ width: WIDTH / 1.5, }}
                    thumbStyle={{ width: 20, height: 20, justifyContent: 'center', backgroundColor: 'grey' }}
                    thumbProps={{
                        children: (
                            <View style={styles.thump}>
                            </View>
                        ),
                    }}
                />
                <Icon name={props.name} type={props.type} size = {28} color={white}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    thump: {
        width: 12,
        height: 12, borderRadius: 50,
        backgroundColor: white,
        alignSelf: 'center',
    }
})