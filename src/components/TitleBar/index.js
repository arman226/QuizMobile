import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const TitleBar = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {navigation.canGoBack() && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  iconContainer: {
    marginRight: 15,
    marginBottom: -100,
  },
});

export default TitleBar;
