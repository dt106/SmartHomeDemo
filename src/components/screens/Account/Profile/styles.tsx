import { StyleSheet } from "react-native";
import { HEIGHT, WIDTH } from "../../../../assets/size";
import { Color } from "../../../../assets/color/Color";

export const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT,
        backgroundColor:Color.parent
      },
      account:{
        borderRadius:50,
      },
      group: {
        flexDirection: 'column',
        marginTop:20
      },
      item: {
        width: WIDTH / 1,
        height: HEIGHT / 15,
        shadowColor: Color.white,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row',
        paddingHorizontal: 15,
        backgroundColor:Color.parent
      },
      info:{
        color: Color.yellow
      }
})