import {StyleSheet} from 'react-native';

export const HomeScreenStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 34,
      color: '#fff',
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 18,
      textAlign: 'center',
      color: '#e0e0e0',
      marginBottom: 40,
    },
    btn: {
      backgroundColor: '#fff',
      paddingHorizontal: 30,
      paddingVertical: 15,
      borderRadius: 25,
    },
    btnText: {
      color: '#4a90e2',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
