import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { DataProvider } from './src/context/DataContext';

function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </DataProvider>
  );
}

export default App;