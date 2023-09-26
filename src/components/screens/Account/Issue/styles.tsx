import { StyleSheet } from "react-native";
import { HEIGHT, WIDTH } from "../../../../assets/size";
import { Color } from "../../../../assets/color/Color";

export const styles = StyleSheet.create({
    container:{
        width: WIDTH,
        height: HEIGHT,
        backgroundColor:Color.parent,
    },
    boxQuantity:{
        width: 150,
        height: 150,
        alignSelf:'center',
        justifyContent:'center',
    },
    quantity:{
        position:'absolute',
        alignSelf:'center',
        top: 50,
        fontSize: 40,
        fontWeight:'800'
    },
    icon:{
    },
    item:{
        width: WIDTH,
        height: HEIGHT/15,
        backgroundColor:Color.parent
    },
    lst:{
        height: HEIGHT/1.5,
    }
})