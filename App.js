import React from 'react';
import { Provider } from 'react-redux';
import { Root } from "native-base";
import configureStore from './store';
import AppNavigator from './src/navigators/AppNavigator';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Root>
        <AppNavigator />
      </Root>
    </Provider>
  );
}

export default App;
