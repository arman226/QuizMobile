import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {NAVY_BLUE} from '../../../../styles/colors.styles';

const Item = ({item}) => {
  const {icon, title, screen} = item;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(screen)}>
      <View style={styles.iconContainer}>
        <Icon name={icon} color="white" size={25} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  titleContainer: {
    paddingHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  },
  iconContainer: {
    backgroundColor: NAVY_BLUE,
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
  },
});

export default Item;
