import React, {useState, useEffect} from 'react';
import {Animated, StyleSheet, Dimensions, FlatList} from 'react-native';
import Item from './Item';
import TitleBar from 'components/TitleBar';
import Header from 'components/Header';

const {event, ValueXY} = Animated;
const Categories = ({route, navigation}) => {
  const [scrollY, setScrollY] = useState(new ValueXY());
  const {categories, subjectName, icon, description} = route.params;

  const renderItem = ({item}) => <Item item={item} />;

  const renderTitleBar = () => <TitleBar title={subjectName} />;

  useEffect(() => {
    return () => {
      setScrollY(new ValueXY());
    };
  }, []);

  return (
    <>
      <Header scrollY={scrollY} title={subjectName} />
      <FlatList
        ListHeaderComponent={renderTitleBar}
        contentContainerStyle={styles.mainContainer}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onScroll={event([{nativeEvent: {contentOffset: {y: scrollY.y}}}], {
          useNativeDriver: false,
        })}
      />
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    paddingTop: 38,
    paddingBottom: 10,
    backgroundColor: '#FFFF',
  },
});

export default Categories;
