/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const table = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const TicTac = () => {
  return (
    <TouchableOpacity style={styles.slot}>
      <Text>
        X
      </Text>
    </TouchableOpacity>
  )
}

function App(): React.JSX {
  return (
    <View style={styles.container}>
      <Text>Un Gato</Text>
      <TicTac />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slot: { height: 50, width: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 2}
});

export default App;
