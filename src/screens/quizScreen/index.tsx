import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {quizScreenStyle} from './style';
import LinearGradient from 'react-native-linear-gradient';

import {questionsData} from '../../utils/data/questionData';

const QuizScreen = ({navigation}: any) => {
  const styles = quizScreenStyle();
  const questions = questionsData;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectAnswer, setSelectAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [remainingTime, setRemainingTime] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          nextQuestion();
          return 10;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentQuestion]); // For timer function

  useEffect(() => {
    if (currentQuestion >= questions.length) {
      setQuizCompleted(true);
    }
  }, [currentQuestion]); // if quiz have been completed

  useEffect(() => {
    if (quizCompleted) {
      navigation.navigate('Result', {
        score: score,
        totalQuestions: questions.length,
      });
    }
  }, [quizCompleted]); // if quiz completed it will navigate to next Screen

  const handleAnswer = (answer: string) => {
    setSelectAnswer(answer);
    setIsAnswered(true);

    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setRemainingTime(10);
  }; // handle answer of questions

  const nextQuestion = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentQuestion(prev => prev + 1);
      setSelectAnswer(null);
      setIsAnswered(false);
      setRemainingTime(10);
      setLoading(false);
    }, 1000);
  }; // it use to navigate to next question

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
      </View>
    );
  } // loader

  if (quizCompleted) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.completedText}>Quiz Completed</Text>
        <ActivityIndicator size="large" color="#4a90e2" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}>
        <View style={styles.questionContainer}>
          <View style={styles.timerView}>
            <Text style={styles.questionNumber}>
              Question {currentQuestion + 1}/{questions.length}
            </Text>
            <Text style={styles.timer}>{remainingTime}s</Text>
          </View>
          <Text style={styles.question}>
            {questions[currentQuestion].question
              ? questions[currentQuestion].question
              : 'No Question available'}
          </Text>
          <View style={styles.optionsContainer}>
            {questions[currentQuestion].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.option,
                  selectAnswer === option && styles.selectedOption,
                  isAnswered &&
                    option === questions[currentQuestion].correctAnswer &&
                    styles.correctOption,
                  isAnswered &&
                    selectAnswer === option &&
                    selectAnswer !== questions[currentQuestion].correctAnswer &&
                    styles.wrongOption,
                ]}
                onPress={() => !isAnswered && handleAnswer(option)}
                disabled={isAnswered}>
                <Text
                  style={[
                    styles.optionText,
                    isAnswered &&
                      option === questions[currentQuestion].correctAnswer &&
                      styles.correctOptionText,
                    isAnswered &&
                      selectAnswer === option &&
                      selectAnswer !==
                        questions[currentQuestion].correctAnswer &&
                      styles.wrongOptionText,
                  ]}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {isAnswered && (
            <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
              <Text style={styles.nextButtonText}>Next Question</Text>
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default QuizScreen;
