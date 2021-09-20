import React, {useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {CheckEmail} from '../utils/validation';

import {setStorage} from '../utils/storages';

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [rePass, setRePass] = useState('');
    const _handelRegister = async () => {
        if(!CheckEmail(email)){
            alert('nhap mail ngu')
        }else if (pass.length < 6){
            alert('nhap pass ngu')
        }else if(rePass != pass){
            alert('nhap ngu vl')
        }else{
            alert('oke')
            const arrUser ={
                email: email,
                pass: pass,
            }
            console.log(arrUser);
            await setStorage('USER', JSON.stringify(arrUser))
        }
    }
  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}>
          <View>
            <TextInput
              placeholder="Enter Email"
              placeholderTextColor="#5F9EA0"
              autoCorrect={false}
              value={email}
              onChangeText={email => setEmail(email)}
            />
            <TextInput
              placeholder="Enter password"
              placeholderTextColor="#5F9EA0"
              autoCorrect={false}
              value={pass}
              onChangeText={pass => setPass(pass)}
            />
            <TextInput
              placeholder="Nhap lai pass"
              placeholderTextColor="#5F9EA0"
              autoCorrect={false}
              value={rePass}
              onChangeText={rePass => setRePass(rePass)}
            />
            <TouchableOpacity onPress={() =>_handelRegister()}>
              <Text>Register</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {},
});

export default RegisterScreen;
