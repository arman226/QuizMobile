import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';

const Stack = createStackNavigator();

const RoutesNavigation = () => {
  return (
    <Stack.Navigator>
      {Routes.map(({screen, component, key}) => (
        <Stack.Screen
          name={screen}
          component={component}
          key={key}
          options={{headerShown: false}}
        />
      ))}
    </Stack.Navigator>
  );
};

export default RoutesNavigation;
