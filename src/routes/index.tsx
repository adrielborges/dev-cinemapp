import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import BottomTabBar from './../components/BottomTabBar';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Tab.Screen name="Procurar" component={Home} />
        <Tab.Screen name="Favoritos" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
