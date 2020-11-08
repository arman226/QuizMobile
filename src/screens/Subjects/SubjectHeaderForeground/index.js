import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';

const SubjectHeaderForeground = ({height, headerHeight}) => {
  return (
    <View style={[styles.container, {height, paddingTop: headerHeight}]}>
      <Text style={styles.headerText}>Subjects</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('screen').height * 0.15,
    backgroundColor: '#FFF',
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    shadowOffset: {width: 0, height: 2},
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 1,
    color: '#000',
    textShadowRadius: 2,
    letterSpacing: 10,
  },
});

export default SubjectHeaderForeground;
