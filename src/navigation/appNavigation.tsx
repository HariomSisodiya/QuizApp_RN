import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import QuizScreen from '../screens/quizScreen';
import ResultScreen from '../screens/resultScreen/resultScreen';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4a90e2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Quiz App'}}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{title: 'Quiz'}}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{title: 'Quiz Result'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
