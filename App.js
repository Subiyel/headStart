import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './src/store/configureStore';
const {store, persistor} = configureStore();

const App: () => React$Node = () => {
  return (
     <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
     </Provider> 
  );
};








const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'red',
  }
});

export default App;
