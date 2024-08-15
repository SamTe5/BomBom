import React from 'react';
import Welcome from "./Pages/Welcome/Welcome"
import { NavigationContainer } from '@react-navigation/native';




export default function Index() {
  return (
    <NavigationContainer independent>
      <Welcome/>
    </NavigationContainer>
  );
}
