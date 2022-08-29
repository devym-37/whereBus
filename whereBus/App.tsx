import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';

import Home from './src/views/Home';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarLabel: '홈',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color, size }) => (
            <AntDesignIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="정류장"
        component={Home}
        options={{
          tabBarLabel: '정류장',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcons name="map-marked-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="버스"
        component={Home}
        options={{
          tabBarLabel: '버스',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcons name="bus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="정보"
        component={Home}
        options={{
          tabBarLabel: '정보',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcons name="list-ul" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default App;
