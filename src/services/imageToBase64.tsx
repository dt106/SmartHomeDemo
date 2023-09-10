import RNFS from 'react-native-fs'
export const imageToBase64 = async (imagePath: any)=>{
    try{
        // const path = await RNFS.DocumentDirectoryPath + imagePath;
        const base64 = await RNFS.readFileAssets(imagePath, 'base64');
        return base64;
    }
    catch(error){
        console.error(error)
        return null
    }
}