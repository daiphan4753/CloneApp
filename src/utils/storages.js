import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStorage = async (name, data) => {
    try {
        await AsyncStorage.setItem(name, data);
        return true;
    }catch (err){
        console.log(err);
        return false;
    }
}

export const getStorage = async (name) => {
    try{
        return await AsyncStorage.getItem(name);
    }catch (err){
        console.log(err);
    }
    return false;
}

export const deleteStorage = async (name) => {
    try{
        await AsyncStorage.removeItem(name);
        return true;
    }catch (err){
        console.log(err);
        return false;
    }
}