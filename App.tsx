import 'react-native-gesture-handler';
import React from 'react';
import { StackNavigationController } from './src/Navigation/StackNavigationController';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

const App = () => {
    return (
      <StackNavigationController />
    )
}

export default App;
