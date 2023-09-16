import AsyncStorage from "@react-native-async-storage/async-storage"

export default class Storage{
    constructor(){}
    async SaveInfo (info: object){
        try {
            await AsyncStorage.setItem('info', JSON.stringify(info));
        } catch (error) {
            console.log(error)
        }
    }
    async GetInfo () {
        try {
           const value =  await AsyncStorage.getItem('info');
           return value;
        } catch (error) {
            console.log(error);
        }
    }
}