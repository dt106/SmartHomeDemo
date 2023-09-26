import { StyleSheet } from "react-native";
import { WIDTH } from "../../../assets/size";
import { Color } from "../../../assets/color/Color";

export const styles = StyleSheet.create({
    container:{
        width: WIDTH/4,
        height: 40,
        backgroundColor:Color.darkgreen,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
    }
})