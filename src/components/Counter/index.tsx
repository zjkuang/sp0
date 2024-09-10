import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {useTheme} from '../../theme';
import {styles} from './style';

export const Counter = () => {
  const {isDarkMode} = useTheme();
  const [count, setCount] = React.useState(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[backgroundStyle, styles.centerContentsContainer]}>
      <View style={styles.frame}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{count}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
