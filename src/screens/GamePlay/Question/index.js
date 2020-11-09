import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Question = ({question}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  questionText: {
    color: '#fff',
    fontSize: 30,
    elevation: 1,
  },
});

export default Question;
