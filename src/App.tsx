import 'react-native-gesture-handler';
import * as React from 'react';
import Routes from './routes';
import AppContext from './context';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <AppContext>
        <Routes />
      </AppContext>
    </>
  );
}
