import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Item from './Item';

const Categories = ({subjectTypes, selectedIndex, onItemSelect}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={subjectTypes}
        showsHorizontalScrollIndicator={false}
        horizontal
        key={(item) => item.type}
        renderItem={({item, index}) => (
          <Item
            item={item}
            onItemSelect={onItemSelect}
            isSelected={index === selectedIndex}
            index={index}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 30,
  },
});

export default Categories;
