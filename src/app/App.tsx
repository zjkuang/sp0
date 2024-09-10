/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {} from 'react-native/Libraries/NewAppScreen';

import {useTheme} from '../theme';
import {styles} from './style';

function App(): React.JSX.Element {
  const {isDarkMode} = useTheme();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.centerContentsContainer]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text>Hello, World!</Text>
    </SafeAreaView>
  );
}

export default App;
