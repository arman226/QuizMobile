import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Text, FlatList} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ActionCreator from 'modules/question/actionCreators';
import Option from './Option';
import {NAVY_BLUE, NEON_BLUE} from 'styles/colors.styles';
import Header from './Header';
import Question from './Question';
import CloseButton from 'components/CloseButton';
import ProgressBar from 'components/ProgressBar';

const GamePlay = ({
  fetchQuestionsStart,
  isLoading,
  questions,
  route,
  navigation,
}) => {
  const {categoryId} = route.params;
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuestionsStart(categoryId);
  }, []);

  const handleOnCloseButtonPressed = () => {
    navigation.goBack();
  };

  const handleOnOptionPress = (item) => {
    const {title, isCorrectAnswer} = item;
    setSelectedOption(title);

    if (isCorrectAnswer) {
      setScore((previousScore) => previousScore + 1);
    }

    if (index + 1 < questions.length) {
      setIndex((ind) => ind + 1);
    } else {
      navigation.goBack();
    }
    alert(`answer is ${isCorrectAnswer === 1 ? 'correct' : 'wrong'}`);
  };

  const renderOptions = ({item}) => (
    <Option
      item={item}
      onPress={() => handleOnOptionPress(item)}
      style={{
        backgroundColor:
          selectedOption === item.optionName ? 'white' : NEON_BLUE,
      }}
      textColor={selectedOption === item.optionName ? NEON_BLUE : '#fff'}
    />
  );

  if (isLoading) {
    return <Text>loading</Text>;
  }
  if (questions.length <= 0) {
    return <Text>no Items</Text>;
  }
  return (
    <View style={styles.mainContainer}>
      <ProgressBar divisor={questions.length} dividend={index + 1} />
      <View style={{alignItems: 'flex-end'}}>
        <CloseButton onPress={handleOnCloseButtonPressed} />
      </View>
      <Header questions={questions} index={index} score={score} />
      <View style={styles.quizContainer}>
        <Question question={questions[index].questionDetails} />
        <FlatList
          data={questions[index].options}
          extraData={(index, selectedOption)}
          keyExtractor={(item, idx) => idx.toString()}
          renderItem={renderOptions}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: NAVY_BLUE,
  },
  quizContainer: {
    paddingTop: Dimensions.get('screen').height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});

const select = ({question}) => {
  const questions = question.data;
  const {isLoading} = question;
  return {questions, isLoading};
};

const actions = (dispatch) => {
  return bindActionCreators(ActionCreator, dispatch);
};

export default connect(select, actions)(GamePlay);
