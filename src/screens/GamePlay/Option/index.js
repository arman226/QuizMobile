import React from 'react';
import {StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import {NEON_BLUE} from 'styles/colors.styles';

const Option = ({item, onPress, style, textColor = '#fff'}) => {
  const {optionName} = item;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={{color: textColor, fontWeight: 'bold'}}>{optionName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: NEON_BLUE,
    width: Dimensions.get('screen').width * 0.8,
    borderRadius: 5,
    padding: 12,
  },
});

export default Option;
