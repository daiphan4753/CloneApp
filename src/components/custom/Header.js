import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Header = ({title, btnBack, btnAdd, flexRow, headerColor}) => {
  return (
    <View
      style={{
        backgroundColor: `${headerColor}`,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: flexRow ? 'row' : 'column',
        alignItems: flexRow ? 'flex-start' : 'center',
        alignContent: 'center',
      }}>
      {btnBack && (
        <TouchableOpacity style={{
            padding: 10
        }}>
          <Icon name="angle-left" size={26}/>
        </TouchableOpacity>
      )}
      <Text
        style={{
          fontSize: 26,
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
      {btnAdd && (
        <TouchableOpacity
          style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', padding: 10}}>
          <Icon name="plus" size={26}/>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
