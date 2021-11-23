import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FollowRequests from '../pages/RequestStack/FollowRequests';
import Home from '../pages/Home';
import Basket from '../pages/Basket';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { theme } from '../theme';

const Tab = createBottomTabNavigator();

function TabRoutes(){
  return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          style: {
            height: 70,
            backgroundColor: theme.colors.white,
            borderTopWidth: 0,
          },
          tabStyle: {
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          },
          iconStyle: {
            flex: 1,
          },
          labelStyle: {
            fontSize: 0,
            marginTop: 5,
          },
          inactiveTintColor: '#7A7A7A',
          activeTintColor: theme.colors.gold,
      }}>
        <Tab.Screen name="FollowRequests" component={FollowRequests}  options={{
          tabBarIcon: ({ color, size }) => (
              <Feather name="info" size={30} color={color} />
        ),}}/>
        <Tab.Screen name="Home" component={Home}  options={{
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="coffee-outline" size={30} color={color} />
        )}}/>
        <Tab.Screen name="Basket" component={Basket}  options={{
          tabBarIcon: ({ color, size }) => (
              <Ionicons name="basket-outline" size={30} color={color} />
        ),}}/>
      </Tab.Navigator>
  );
}

export default TabRoutes;