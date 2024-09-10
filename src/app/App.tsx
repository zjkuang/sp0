import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Counter} from '../components/Counter';
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
      <Counter />
    </SafeAreaView>
  );
}

export default App;
