import React from 'react';
import {StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as screens from 'constants/screens';

const Item = ({item, index}) => {
  const navigation = useNavigation();
  const {subject, description, subjectId} = item;
  const navigateToCategories = () => {
    navigation.navigate(screens.CATEGORIES, {subjectId, subject});
  };

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={navigateToCategories}
      activeOpacity={0.6}>
      <Text style={styles.title}>{subject}</Text>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    margin: 7,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    borderRadius: 10,
    width: Dimensions.get('screen').width * 0.4,
    height: Dimensions.get('screen').height * 0.2,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Item;
