import React from 'react';
import {View, StyleSheet} from 'react-native';
import Menu from './Menu';
import Title from './Title';

const Home = () => {
  return (
    <View style={styles.container}>
      <Title />
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
});

export default Home;
