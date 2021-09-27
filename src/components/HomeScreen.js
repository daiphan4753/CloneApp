import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from './custom/Header';
import Colors from './custom/color';
import {CardView, BtnView, ImageLine} from './custom/CustomComponent';

const Home = ({navigation}) => {
  return (
    <>
    <Header title="Home" headerColor={Colors.COLOR_DEFAULT} flexRow btnAdd/>
    <ScrollView style={{flex: 1}}>
        <CardView title="Home" header fwrap>
          <BtnView title="abc" image={require('../assets/images/home.png')} />
          <BtnView title="abc" image={require('../assets/images/home.png')} />
          <BtnView title="abc" image={require('../assets/images/home.png')} />
          <BtnView title="abc" image={require('../assets/images/home.png')} />
        </CardView>
    </ScrollView>
    </>
  );
};

export default Home;
