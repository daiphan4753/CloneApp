import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import Header from './custom/Header';
import Colors from './custom/color';
import {ImageLine, CardView} from './custom/CustomComponent';

const SettingScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="Setting"
        headerColor={Colors.COLOR_DEFAULT}
      />
      <ScrollView style={{flex: 1}}>
        <View style={styles.imgContainer}>
        <View style={styles.vImage}>
          <Image
            source={require('../assets/images/avt.jpg')}
            style={styles.img}
          />
          </View>
          <Text style={styles.text}>This is your name</Text>
        </View>
        <CardView column>
          <ImageLine title="full name" image="user-alt" />
          <ImageLine title="phone number" image="phone" />
          <ImageLine
            title="https://www.facebook.com/daiphan4753"
            image="link"
          />
          <ImageLine title="log out" image="sign-out-alt" />
        </CardView>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
  },
  img: {
    height: 130,
    width: 130,
  },
  text: {
      fontSize: 25,
  },
  vImage:{
      backgroundColor: '#fff',
      borderRadius: 10,
      margin:5,
      padding: 20,
      shadowColor: '#696969',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  }
});
export default SettingScreen;
