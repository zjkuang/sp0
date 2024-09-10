import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {useTheme} from '../../theme';
import {styles} from './style';

export const Counter = () => {
  const {isDarkMode} = useTheme();
  // const [count, setCount] = React.useState(0);
  let count = 0;

  const minusButtonHandler = () => {
    console.log(`count = ${count} before minus button was pressed`);
    count -= 1;
    console.log(`count = ${count} after minus button was pressed`);
  };

  const plusButtonHandler = () => {
    console.log(`count = ${count} before plus button was pressed`);
    count += 1;
    console.log(`count = ${count} after plus button was pressed`);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[backgroundStyle, styles.centerContentsContainer]}>
      <View style={styles.frame}>
        <TouchableOpacity
          style={styles.button}
          onPress={minusButtonHandler}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{count}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={plusButtonHandler}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
