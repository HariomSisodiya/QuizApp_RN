import {StyleSheet} from 'react-native';

export const resultScreenStyle = () =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    resultContainer: {
      alignItems: 'center',
      marginBottom: 40,
    },
    resultText: {
      fontSize: 36,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    scoreText: {
      fontSize: 22,
      color: '#e0e0e0',
      marginTop: 20,
      textAlign: 'center',
    },
    percentageText: {
      fontSize: 48,
      color: '#fff',
      fontWeight: 'bold',
      marginTop: 10,
      textAlign: 'center',
    },
    restartButton: {
      backgroundColor: '#fff',
      paddingHorizontal: 30,
      paddingVertical: 15,
      borderRadius: 25,
    },
    restartButtonText: {
      fontSize: 18,
      color: '#4a90e2',
      fontWeight: 'bold',
    },
  });
