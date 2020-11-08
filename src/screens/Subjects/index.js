import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, FlatList} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ActionCreator from 'modules/testApi/actionCreators';
import sampleSubject from './sampleSubjects';
import Item from './Item';
import Header from 'components/Header';
import TitleBar from 'components/TitleBar';

const {event, ValueXY} = Animated;

const Subjects = ({testApi, fetchTestApiStart}) => {
  const [scrollY, setScrollY] = useState(new ValueXY());

  useEffect(() => {
    fetchTestApiStart();
    return () => {
      setScrollY(new ValueXY());
    };
  }, []);

  console.log('here', testApi);

  const renderSubjects = ({item}) => <Item item={item} index={0} />;
  const renderTitleBar = () => <TitleBar title="Subjects" />;

  return (
    <>
      <Header title="Subjects" scrollY={scrollY} />
      <FlatList
        contentContainerStyle={styles.contentContiner}
        onScroll={event([{nativeEvent: {contentOffset: {y: scrollY.y}}}], {
          useNativeDriver: false,
        })}
        data={sampleSubject[0].subjects}
        keyExtractor={(item) => item.id.toString()}
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
  },
  contentText: {
    fontSize: 16,
  },
});

const select = ({testApi}) => {
  return {testApi};
};

const actions = (dispatch) => {
  return bindActionCreators(ActionCreator, dispatch);
};

export default connect(select, actions)(Subjects);
