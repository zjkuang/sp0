import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centerContentsContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center', // along the direction perpendicular to flexDirection
    justifyContent: 'center', // along flexDirection
  },
  frame: {
    flexDirection: 'row',
    alignItems: 'center', // along the direction perpendicular to flexDirection
    justifyContent: 'center', // along flexDirection
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
  text: {
    width: 100,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
