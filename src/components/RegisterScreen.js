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
  Dimensions,
} from 'react-native';
import {CheckEmail} from '../utils/validation';

import {setStorage} from '../utils/storages';

const WIDTH = Dimensions.get('window').width;
const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');
  const _handelRegister = async () => {
    if (!CheckEmail(email)) {
      alert('Sai định dạnh email!');
    } else if (pass.length < 6) {
      alert('pass nhiều hơn 6 kí tự!');
    } else if (rePass != pass) {
      alert('nhập lại pass lỗi!');
    } else {
      alert('oke');
      const arrUser = {
        email: email,
        pass: pass,
      };
      console.log(arrUser);
      await setStorage('USER', JSON.stringify(arrUser));
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.txtContainer}>
            <Text style={styles.txtWC}>Register ID </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              placeholderTextColor="#5F9EA0"
              autoCorrect={false}
              value={email}
              onChangeText={email => setEmail(email)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              placeholderTextColor="#5F9EA0"
              autoCorrect={false}
              value={pass}
              onChangeText={pass => setPass(pass)}
            />
            <TextInput
              style={styles.input}
              placeholder="RePassword"
              placeholderTextColor="#5F9EA0"
              autoCorrect={false}
              value={rePass}
              onChangeText={rePass => setRePass(rePass)}
            />
            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={() => _handelRegister()}
                style={styles.btnReg}>
                <Text style={styles.txtReg}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}
                style={styles.btnBack}>
                <Text style={styles.txtBack}>Back To Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#4da6ff',
  },
  txtContainer: {
    flex: 0.3,
    justifyContent: 'flex-end',
    marginBottom: 25,
  },
  txtWC: {
    fontSize: 30,
    marginBottom: 20,
    color: '#ffff',
    fontWeight: 'bold',
    opacity: 0.9,
    marginLeft: 15,
  },
  inputContainer: {
    flex: 0.7,
    backgroundColor: '#fff',
    borderWidth: 0.01,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 50
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
  btnContainer: {
    flexDirection: 'row',
    marginTop:15,
  },
  btnReg: {
    backgroundColor: '#1e90ff',
    borderRadius: 10,
    marginHorizontal: 10,
    width: WIDTH / 2 - 20,
    padding:10,
  },
  btnBack: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: 10,
    width: WIDTH / 2 - 20,
    padding:10
  },
  txtReg: {
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffff'
  },
  txtBack: {
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    opacity: 0.8,
  },
});

export default RegisterScreen;
