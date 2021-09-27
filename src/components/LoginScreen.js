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

import {getStorage, setStorage} from '../utils/storages';

export default LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const _handelLogin = async () => {
    if (!CheckEmail(email)) {
      alert('Email Sai');
    } else if (pass.length < 6) {
      alert('Pass thieu');
    } else {
      const dataUser = await getStorage('USER');
      const dataUserPaser = JSON.parse(dataUser);
      if (email == dataUserPaser.email && pass == dataUserPaser.pass) {
        await setStorage('TOKEN', `abc${Math.random() * 10000000}`);
        alert('oke');
      } else if(dataUserPaser.email == null){
        alert('Email này chưa tồn tại!');
      }else{
        alert('Lỗi nhập!')
      }
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.txtContainer}>
            <Text style={styles.txtWC}>Đăng nhập</Text>
          </View>
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
              returnKeyType="go"
              secureTextEntry
              autoCorrect={false}
              value={pass}
              onChangeText={pass => setPass(pass)}
            />
            <TouchableOpacity
              style={styles.btnLoginContainer}
              onPress={() => _handelLogin()}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <Text
              style={styles.txtRegister}
              onPress={() => navigation.navigate('RegisterScreen')}>
              Chưa có tài khoản?
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4da6ff',
  },
  txtContainer: {
    flex: 0.3,
    justifyContent: 'flex-end',
  },
  txtWC: {
    fontSize: 40,
    color: '#ffff',
    fontWeight: 'bold',
    textAlign: 'left',
    opacity: 0.9,
    marginLeft: 15,
    marginBottom: 25,
  },
  inforContainer: {
    flex: 0.7,
    backgroundColor: '#ffffff',
    borderWidth: 0.01,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop:50,
  },
  input: {
    backgroundColor: '#edebeb',
    color: '#000',

    height: 50,
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,

    borderWidth: 0,
    borderRadius: 10,
    margin: 10
  },
  btnLoginContainer: {
    backgroundColor: '#1e90ff',
    margin: 10,
    padding: 10,
    borderRadius: 10,

  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    opacity: 0.97,
    color: '#fff'
  },
  txtRegister: {
    marginTop: 5,
    textAlign: 'right',
    fontSize: 15,
    marginRight: 5,
  },
});
