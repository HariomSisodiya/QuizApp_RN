import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {resultScreenStyle} from './style';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ResultScreen = ({navigation, route}: any) => {
  const styles = resultScreenStyle();

  const {score, totalQuestions} = route.params;
  const precentage = (score / totalQuestions) * 100;
  let resultMessage = '';
  let resultColor = '';

  if (precentage >= 80) {
    resultMessage = 'Excellent!';
    resultColor = '#4CAF50';
  } else if (precentage >= 60) {
    resultMessage = 'Good job!';
    resultColor = '#FFC107';
  } else {
    resultMessage = 'Keep practicing!';
    resultColor = '#F44336';
  }

  const restartQuiz = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{resultMessage}</Text>
          <AntDesign name="Trophy" size={100} color={resultColor} />
          <Text style={styles.scoreText}>
            Your Score : {score}/{totalQuestions}
          </Text>
          <Text style={styles.percentageText}>{precentage.toFixed(2)}%</Text>
        </View>
        <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
          <Text style={styles.restartButtonText}>Restart Quiz</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ResultScreen;
