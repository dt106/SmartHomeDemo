import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { HEIGHT, WIDTH } from '../../assets/size'
import Label from '../atom/Label'
import { parent, white } from '../../assets/color/Color'
type Props = PropsWithChildren<{
    Yes: ()=>void,
    No:()=>void
}>
export default function ConfirmDelete(props: Props) {
  return (
    <View style = {styles.container}>
      <Label content='Bạn có chắc muốn xoá?' color='white' style = {{alignSelf:'center'}}/>
        <View style = {styles.btnView}>
            <TouchableOpacity onPress={props.Yes} style = {styles.btn}>
                <Label content='Có' color='white'/>
            </TouchableOpacity>
            <Text style = {{borderWidth:0.3, borderColor: white}}></Text>
            <TouchableOpacity onPress={props.No} style = {styles.btn}>
                <Label content='Không' color='white'/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        width: WIDTH/1.6,
        height: HEIGHT/10,
        backgroundColor: parent,
        borderRadius: 15,
        alignSelf:'center',
        justifyContent:'center',
        flexDirection:'column',
        paddingTop: 15,
        rowGap: 10,
        marginTop:HEIGHT/3
    },
    btnView:{
        height:HEIGHT/17,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    btn:{
    }
})