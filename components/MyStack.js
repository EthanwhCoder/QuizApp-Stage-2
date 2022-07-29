import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Question1Screen from '../screens/Question1Screen';
import WelcomeScreen from '../screens/WelcomeScreen';
const Stack = createNativeStackNavigator();

export default class MyStack extends React.Component {
  render() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Question1Screen" component={Question1Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
};