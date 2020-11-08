import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {NAVY_BLUE} from '../../../../styles/colors.styles';

const Item = ({item}) => {
  const {title, icon, screen} = item;
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name={icon} style={styles.icon} size={25} color="#fff" />
      <View style={styles.titleContainer}>
        <Text style={styles.menuTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 3,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.5,
    // shadowRadius: 1,
    // elevation: 2,
    // padding: 15,
    alignItems: 'center',
    padding: 5,
  },
  icon: {
    padding: 10,
    borderColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
  },
  titleContainer: {
    padding: 10,
  },
  menuTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#fff',
  },
});
export default Item;
