import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = ({subjectName, numberOfCategories}) => {
  return (
    <View style={styles.titleTextContainer}>
      <View style={styles.subjectContainer}>
        <Text style={styles.subjectText}>{subjectName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleTextContainer: {
    padding: 10,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  subjectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  subjectText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },
  noOfCategoriesText: {
    fontSize: 15,
    color: '#fff',
  },
});

export default Title;
