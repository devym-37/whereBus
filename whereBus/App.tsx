import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

import Home from './src/views/Home';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      inactiveColor="black"
      barStyle={styles.barStyle}>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color }) => (
            <AntDesignIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="정류장" component={Home} />
      <Tab.Screen name="버스" component={Home} />
      <Tab.Screen name="정보" component={Home} />
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

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: 'white',
  },
});

export default App;
