import React, { Component } from "react";
import { Text, View } from "react-native";

import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import Home from "./src/screens/home";
import About from "./src/screens/about";
import Item from "./src/screens/item";
import ItemList from "./src/screens/itemList";
import TabA from "./src/screens/tabA";
import TabB from "./src/screens/tabB";

const App = () => {
  //if you want dark theme you have to pass theme={DarkTheme} in navigator container
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

const Drawer1 = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DrawerNavigator = () => (
  <Drawer1.Navigator>
    <Drawer1.Screen name="ABOUT" component={About} />
    <Drawer1.Screen name="HOME" component={Home} />
    <Drawer1.Screen name="ITEMS" component={StackNavigator} />
    <Drawer1.Screen name="TABS" component={TabNavigator} />
  </Drawer1.Navigator>
);

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ITEM"
      component={Item}
      options={{
        title: "TITLE PAGE",
        headerStyle: {
          backgroundColor: "green"
        }
      }}
    />
    <Stack.Screen name="ITEM_LIST" component={ItemList} />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="TAB A" component={TabA} />
    <Tab.Screen name="TAB B" component={TabB} />
  </Tab.Navigator>
);

export default App;
