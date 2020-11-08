import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {NAVY_BLUE} from 'styles/colors.styles';

const Header = ({questions, index, score}) => (
  <View style={styles.quizTitleContainer}>
    <View style={styles.titleAndScoreContainer}>
      <View>
        <Text style={styles.questionCountText}>
          Question {index + 1} of {questions.length}
        </Text>
        <Text style={styles.titleText}>{questions[index].title}</Text>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{score}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  titleText: {
    fontSize: 17,
    color: 'white',
  },

  scoreContainer: {
    margin: 5,
    padding: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 80,
    alignItems: 'center',
  },
  quizTitleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: Dimensions.get('screen').width,
  },
  questionCountText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
  titleAndScoreContainer: {
    paddingHorizontal: 10,
    paddingRight: 20,
    paddingTop: 10,
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    justifyContent: 'space-between',
  },
  scoreText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: NAVY_BLUE,
  },
});

export default Header;
