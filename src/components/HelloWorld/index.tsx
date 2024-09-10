import React from 'react';
import {Text,View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {useTheme} from '../../theme';
import {styles} from './style';

export const HelloWorld = () => {
  const {isDarkMode} = useTheme();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[backgroundStyle, styles.centerContentsContainer]}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
};
