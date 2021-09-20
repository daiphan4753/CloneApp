import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import {CheckEmail} from '../utils/validation';

import {getStorage, setStorage} from '../utils/storages'

export default LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const _handelLogin = async () => {
      if (!CheckEmail(email)) {
        alert('Email Sai')
      }else if(pass.length < 6){
        alert('Pass thieu')
      }else{
       const dataUser =  await getStorage('USER')
       const dataUserPaser = JSON.parse(dataUser);
       if(email == dataUserPaser.email && pass==dataUserPaser.pass){
         await setStorage('TOKEN', `sdjhvshjdfvds${Math.random() * 10000000}`)
        alert('oke')
       }else{
         alert('cut')
       }
      }
    }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/logo_www.png')}
                style={styles.logo}
              />
              <Text style={styles.txtContainer}>This is a login screen</Text>
              <View style={styles.inforContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Email/username"
                  placeholderTextColor="#5F9EA0"
                  keyboardType="email-address"
                  returnKeyType="next"
                  value={email}
                  onChangeText={email => setEmail(email)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter password"
                  placeholderTextColor="#5F9EA0"
                  returnKeyType='go'
                  secureTextEntry
                  autoCorrect={false}
                  value={pass}
                  onChangeText={pass=> setPass(pass)}
                />
                <TouchableOpacity style={styles.btnLoginContainer} onPress={()=>_handelLogin()}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.txtRegister} onPress={()=> navigation.navigate('RegisterScreen')}>Chưa có tài khoản?</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C5c',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
  txtContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: 0.8,
  },
  inforContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 130,
    height: 200,
    padding: 20,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    height: 40,
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  btnLoginContainer: {
      backgroundColor:'#ADD8E6',
      marginVertical:10,
      paddingVertical: 10,
  },
  btnText:{
      fontSize: 15,
      textAlign: 'center',
      fontWeight:'bold',
  },
  txtRegister: {
    textAlign:'right',
    fontSize:15,
  }
});
