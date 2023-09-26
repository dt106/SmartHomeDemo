import { StyleSheet, StatusBar } from "react-native";
import { Color } from "../../../assets/color/Color";
import { WIDTH, HEIGHT } from "../../../assets/size";

export const styles = StyleSheet.create({
    container: {
      width: WIDTH,
      height: HEIGHT,
      paddingTop: 50
    },
    account:{
      borderRadius:50,
    },
    group: {
      flexDirection: 'column',
      alignItems:'center'
    },
    item: {
      width: WIDTH / 1.05,
      height: HEIGHT / 15,
      shadowColor: Color.white,
      elevation: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection:'row',
      paddingHorizontal: 15,
      backgroundColor:Color.black
    },
  });