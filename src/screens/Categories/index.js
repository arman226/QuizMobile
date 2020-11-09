import React, {useState, useEffect} from 'react';
import {Animated, StyleSheet, Dimensions, Text, FlatList} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ActionCreator from 'modules/category/actionCreators';
import Item from './Item';
import TitleBar from 'components/TitleBar';
import Header from 'components/Header';

const {height, width} = Dimensions.get('screen');
const {event, ValueXY} = Animated;
const Categories = ({
  route,
  navigation,
  categoryList,
  isLoading,
  fetchCategoriesStart,
}) => {
  const [scrollY, setScrollY] = useState(new ValueXY());
  const {subjectId, subject} = route.params;

  const renderItem = ({item}) => <Item item={item} />;

  const renderTitleBar = () => <TitleBar title={subject} />;

  useEffect(() => {
    fetchCategoriesStart(subjectId);
    return () => {
      setScrollY(new ValueXY());
    };
  }, []);

  console.log('tets', categoryList);
  return (
    <>
      <Header scrollY={scrollY} title={subject} />
      <FlatList
        ListHeaderComponent={renderTitleBar}
        contentContainerStyle={styles.mainContainer}
        data={categoryList}
        keyExtractor={(item, idx) => idx.toString()}
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
    minHeight: height,
  },
});

const select = ({category}) => {
  const categoryList = category.data;
  const {isLoading} = category;
  return {categoryList, isLoading};
};

const actions = (dispatch) => {
  return bindActionCreators(ActionCreator, dispatch);
};

export default connect(select, actions)(Categories);
