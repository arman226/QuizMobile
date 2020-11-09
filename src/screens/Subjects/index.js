import React, {useEffect, useState} from 'react';
import {
  Animated,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ActionCreator from 'modules/subject/actionCreators';
import Item from './Item';
import Header from 'components/Header';
import TitleBar from 'components/TitleBar';

const {event, ValueXY} = Animated;
const {height, width} = Dimensions.get('screen');

const Subjects = ({subjectList = [], isLoading, fetchSubjectsStart}) => {
  const [scrollY, setScrollY] = useState(new ValueXY());

  useEffect(() => {
    fetchSubjectsStart();

    return () => {
      setScrollY(new ValueXY());
    };
  }, []);

  const renderSubjects = ({item}) => <Item item={item} index={0} />;
  const renderTitleBar = () => <TitleBar title="Subjects" />;

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <Header title="Subjects" scrollY={scrollY} />
      <FlatList
        contentContainerStyle={styles.contentContiner}
        onScroll={event([{nativeEvent: {contentOffset: {y: scrollY.y}}}], {
          useNativeDriver: false,
        })}
        numColumns={2}
        data={subjectList}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={renderSubjects}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderTitleBar}
      />
    </>
  );
};

const styles = StyleSheet.create({
  contentContiner: {
    padding: 10,
    paddingTop: 38,
    paddingBottom: 10,
    backgroundColor: '#FFFF',
    minHeight: height,
  },
  contentText: {
    fontSize: 16,
  },
});

const select = ({subject}) => {
  const subjectList = subject.data;
  const {isLoading} = subject;
  return {subjectList, isLoading};
};

const actions = (dispatch) => {
  return bindActionCreators(ActionCreator, dispatch);
};

export default connect(select, actions)(Subjects);
