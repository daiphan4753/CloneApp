import AsyncStorage from "@react-native-async-storage/async-storage";

// trong data gọi key là name để nhận diện từng bảng data
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
       const value = await AsyncStorage.getItem(name);
        if(value !== null){
            return value;
        }else{
            console.log('null');
        }
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