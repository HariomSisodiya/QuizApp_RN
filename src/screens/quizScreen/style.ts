import {StyleSheet} from 'react-native';

export const quizScreenStyle = () =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      flex: 1,
    },
    questionContainer: {
      flex: 1,
      padding: 20,
    },
    timerView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    questionNumber: {
      fontSize: 18,
      color: '#e0e0e0',
    },
    timer: {
      fontSize: 18,
      color: '#ffcc00',
    },
    question: {
      fontSize: 26,
      color: '#fff',
      fontWeight: 'bold',
      marginBottom: 20,
    },
    optionsContainer: {
      marginBottom: 20,
    },
    option: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
    },
    selectedOption: {
      backgroundColor: 'rgba(255,255,255,0.3)',
    },
    correctOption: {
      backgroundColor: 'rgba(0,255,0,0.3)',
    },
    wrongOption: {
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    optionText: {
      fontSize: 18,
      color: '#fff',
    },
    correctOptionText: {
      fontWeight: 'bold',
    },
    wrongOptionText: {
      textDecorationLine: 'line-through',
    },
    nextButton: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 25,
      alignItems: 'center',
    },
    nextButtonText: {
      color: '#4a90e2',
      fontSize: 18,
      fontWeight: 'bold',
    },
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    completedText: {
      fontSize: 18,
      color: '#4a90e2',
      fontWeight: 'bold',
    },
  });
