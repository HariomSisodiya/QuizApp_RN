import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {HomeScreenStyle} from './style';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({navigation}: any) => {
  const styles = HomeScreenStyle();
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to the Quiz App!</Text>
        <Text style={styles.subTitle}>
          Test your knowledge with our interactive quiz.
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Quiz')}>
          <Text style={styles.btnText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
