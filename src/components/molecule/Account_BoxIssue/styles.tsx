import { StyleSheet } from "react-native";
import { Color } from "../../../assets/color/Color";
import { WIDTH, HEIGHT } from "../../../assets/size";

export const styles = StyleSheet.create({
    container:{
        width: WIDTH,
        height: HEIGHT/15,
        backgroundColor:Color.black,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        elevation: 15,
        shadowColor: Color.white,
        borderBottomWidth:0.5,
        borderColor:Color.white
    },
    item:{
        elevation: 15,
        shadowColor: Color.white
    },
    description:{
        color:Color.yellow
    },
    status:{
        flexDirection:'row',
        columnGap: 10,
        alignItems:'center'
    },
    statusTitle:{
        color: Color.yellow
    },
    btn:{
        height: HEIGHT/15,
        borderRadius: 0,
        width: WIDTH/6,
    },
    viewBtn:{
        flexDirection:'row'
    }
})