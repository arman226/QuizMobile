import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {NAVY_BLUE} from 'styles/colors.styles';

const Item = ({isSelected, index, onItemSelect, item}) => {
  const handleOnPress = () => onItemSelect(index);
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={styles.container(isSelected)}>
      <Text style={styles.subjectText(isSelected)}>{item.type}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (isSelected) => ({
    flex: 1,
    padding: 15,
    paddingHorizontal: 20,
    margin: 8,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomWidth: isSelected ? 3 : 0,
    borderColor: NAVY_BLUE,
  }),
  subjectText: (isSelected) => ({
    fontSize: 19,
    color: isSelected ? '#000' : 'gray',
    fontWeight: 'bold',
  }),
});

export default Item;
