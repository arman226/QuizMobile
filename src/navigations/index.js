import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RoutesNavigation from './RoutesNavigation';

const Navigation = () => {
  return (
    <NavigationContainer>
      <RoutesNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
