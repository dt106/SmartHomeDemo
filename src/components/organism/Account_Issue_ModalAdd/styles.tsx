import { StyleSheet } from "react-native";
import { HEIGHT, WIDTH } from "../../../assets/size";
import { Color } from "../../../assets/color/Color";

export const styles = StyleSheet.create({
    container:{
        width: WIDTH/1.2,
        height: HEIGHT/2,
        backgroundColor: Color.parent,
        elevation: 15,
        shadowColor: Color.yellow,
        alignSelf:'center',
        marginTop: 50,
        borderRadius: 15,    
        flexDirection:'column',
        rowGap:25,
        alignItems:'center',
        paddingTop: 20
    },
    group:{
        width: WIDTH/1.5,
        height: 50,
        borderWidth: 1,
        borderColor:Color.white,
        alignSelf:'center',
        borderRadius: 10,        
    },
    label:{
        position:'absolute',
        top:-10,
        fontSize: 16,
        backgroundColor:Color.parent
    },
    btnView:{
        position:'absolute',
        bottom:20,
        flexDirection:'row',
        columnGap: 30,
    },
    btn:{

    }
})