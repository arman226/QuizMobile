import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {APP_NAME} from '../../../constants/strings';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{APP_NAME}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 5,
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Title;
