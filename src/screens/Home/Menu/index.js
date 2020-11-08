import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Menus} from './menus';
import Item from './Item';

const renderMenuItems = ({item}) => <Item item={item} />;
const Menu = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Menus}
        keyExtractor={(item) => item.key.toString()}
        renderItem={renderMenuItems}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default Menu;
