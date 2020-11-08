import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const DefaultHeader = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#000',
    height: 70,
    width: Dimensions.get('screen').width,
  },
});

export default DefaultHeader;
