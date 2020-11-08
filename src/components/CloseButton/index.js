import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const CloseButton = ({onPress = () => {}}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>X</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  buttonText: {
    fontSize: 30,
  },
});

export default CloseButton;
