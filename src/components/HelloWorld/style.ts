import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centerContentsContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center', // along the direction perpendicular to flexDirection
    justifyContent: 'center', // along flexDirection
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
