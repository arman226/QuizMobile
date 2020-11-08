import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const ProgressBar = ({dividend = 1, divisor = 2}) => {
  const progressValue = dividend / divisor;
  return (
    <View
      style={[
        styles.container,
        {width: Dimensions.get('screen').width * progressValue},
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 8,
    backgroundColor: 'red',
    borderRadius: 10,
  },
});

export default ProgressBar;
