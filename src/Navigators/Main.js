import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faSearch, faHeart, faShoppingCart, faArchive, faUser, faHome, faCircle, faBell } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { HomeScreen } from '@/Components'
const Tab = createBottomTabNavigator()
library.add(faSearch, faCoffee, faHeart, faShoppingCart, faArchive, faUser, faHome, faCircle, faBell);
// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
            size = focused ? 25 : 20;
            color = focused ? '#1E90FF' : '#DCDCDC'
          } else if (route.name === "MyCart") {
            iconName = "circle";
            size = focused ? 25 : 20;
            color = focused ? '#1E90FF' : '#DCDCDC'
          } else if (route.name === "Favourites") {
            iconName = "bell";
            size = focused ? 25 : 20;
            color = focused ? '#1E90FF' : '#DCDCDC'
          } else if (route.name === "User") {
            iconName = "user";
            size = focused ? 25 : 20;
            color = focused ? '#1E90FF' : '#DCDCDC'
          }
          return (
            <FontAwesomeIcon icon={iconName} size={size} color={color} />
          )
        },


      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false
        }} />
      <Tab.Screen
        name="MyCart"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
