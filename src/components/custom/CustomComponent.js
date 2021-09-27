import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from './color';

const WIDTH = Math.round(Dimensions.get('window').width);
const w = WIDTH - 20;
export const HeaderCard = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        {title.length >= 15 ? `${title.substring(0, 15)}...` : title}
      </Text>
      <Image
        style={styles.headerImage}
        source={require('../../assets/images/right.png')}
      />
    </View>
  );
};
export const CardView = ({title, children, header, fwrap, column}) => {
  return (
    <View style={styles.containerCard}>
      {header && <HeaderCard title={title} />}
      <View
        style={{
          flex: 1,
          flexWrap: fwrap ? 'wrap' : 'nowrap',
          flexDirection: column ? 'column' : 'row',
          marginTop: 10,
        }}>
        {children}
      </View>
    </View>
  );
};

export const BtnView = ({title, image}) => {
  return (
    <View
      style={{...styles.containerBtn, width: (WIDTH - 25) / 2.2, height: 100}}>
      <Text>{title}</Text>
      <Image source={image} style={{height: 30, width: 30}} />
    </View>
  );
};

export const IconView = ({image}) => {
  return <Image source={image} style={{height: 30, width: 30}} />;
};

export const ImageLine = ({image, title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 0.5,
        borderColor: '#A9A9A9',
      }}>
      <View style={{justifyContent: 'center'}}>
        <Icon name={image} size={25} color={Colors.COLOR_DEFAULT} />
      </View>
      <Text style={styles.txtImageLine}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.05,
    borderBottomWidth: 1,
    borderColor: '#A9A9A9',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 0,
    margin: 0,
  },
  headerImage: {
    position: 'absolute',
    height: 15,
    width: 15,
    right: 5,
    top: 18,
  },
  containerCard: {
    margin: 10,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingBottom: 5,
    borderRadius: 10,
  },
  containerBtn: {
    backgroundColor: '#fff',
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#696969',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtImageLine: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 5,
  },
});
