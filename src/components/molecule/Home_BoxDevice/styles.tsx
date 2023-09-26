import { StyleSheet } from "react-native";
import { Color } from "../../../assets/color/Color";
import { WIDTH, HEIGHT } from "../../../assets/size";

export const styles = StyleSheet.create({
    container:{
        width: WIDTH / 2.3,
        backgroundColor: Color.parent,
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'column',
        rowGap: 10,
        padding: 10,
        marginBottom: 15,
        elevation: 15, 
        shadowColor: Color.white
    }
})