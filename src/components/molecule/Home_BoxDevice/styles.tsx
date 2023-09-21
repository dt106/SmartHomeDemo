import { StyleSheet } from "react-native";
import { parent, white } from "../../../assets/color/Color";
import { WIDTH, HEIGHT } from "../../../assets/size";

export const styles = StyleSheet.create({
    container:{
        width: WIDTH / 2.3,
        backgroundColor: parent,
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'column',
        rowGap: 20,
        padding: 10,
        elevation: 15, 
        shadowColor: white
    }
})