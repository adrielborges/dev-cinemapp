import 'react-native-gesture-handler';
import * as React from 'react';
import Routes from './routes';
import AppContext from './context';

export default function App() {
  return (
    <AppContext>
      <Routes />
    </AppContext>
  );
}
