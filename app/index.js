import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import People from "../components/kisiler/People"
import Message from "../components/mesaj/Message"
import Hot from "../components/hot/Hot"

const Tab = createMaterialTopTabNavigator();

export default function Index() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="People" component={People}/>
      <Tab.Screen name="Mesaj" component={Message}/>
      <Tab.Screen name="Hot" component={Hot}/>
    </Tab.Navigator>
  );
}
