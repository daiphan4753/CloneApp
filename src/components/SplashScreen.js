import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {getStorage, deleteStorage} from '../utils/storages'
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    getToken()
  },[])
  const getToken = () => {

    setTimeout( async () =>{
      const token = await getStorage('TOKEN')
      if (token === null) {
        navigation.replace('LoginScreen')
      }else {
        navigation.replace('Tabs')
      }
    },2000)

  }
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Wellcome to AppTest</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4da6ff',
  },
  img: {
    height: 150,
    width: 170,
  },
  txt: {
    fontSize: 30,
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowOffset: {
      height: 1,
      width: 0,
    },
    textShadowColor: '#8f8f8f',
    textShadowRadius: 10,
  },
});
export default SplashScreen;
