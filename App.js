import React from 'react';
import {Provider} from 'mobx-react';
import AppNavigator from './src/navigation/AppNavigator';
import * as stores from './src/stores';

const App: () => React$Node = () => {
  return <Provider {...stores}><AppNavigator /></Provider>;
};

export default App;
