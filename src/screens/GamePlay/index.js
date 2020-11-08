import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, FlatList} from 'react-native';
import Option from './Option';
import {NAVY_BLUE, NEON_BLUE} from '../../styles/colors.styles';
import Header from './Header';
import Question from './Question';
import CloseButton from 'components/CloseButton';
import ProgressBar from 'components/ProgressBar';

const GamePlay = ({route, navigation}) => {
  const {questions, categoryName} = route.params;
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

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
    alert(`answer is ${isCorrectAnswer ? 'correct' : 'wrong'}`);
  };

  const renderOptions = ({item}) => (
    <Option
      item={item}
      onPress={() => handleOnOptionPress(item)}
      style={{
        backgroundColor: selectedOption === item.title ? 'white' : NEON_BLUE,
      }}
      textColor={selectedOption === item.title ? NEON_BLUE : '#fff'}
    />
  );

  return (
    <View style={styles.mainContainer}>
      <ProgressBar divisor={questions.length} dividend={index + 1} />
      <View style={{alignItems: 'flex-end'}}>
        <CloseButton onPress={handleOnCloseButtonPressed} />
      </View>
      <Header questions={questions} index={index} score={score} />
      <View style={styles.quizContainer}>
        <Question question={questions[index].question} />
        <FlatList
          data={questions[index].options}
          extraData={(index, selectedOption)}
          keyExtractor={(item) => item.id.toString()}
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

export default GamePlay;
