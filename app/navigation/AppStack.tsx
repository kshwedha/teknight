// src/navigation/HomeStack.tsx
import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SampleScreen from '../screens/SampleScreen';
import MainScreen from '../screens/MainScreen';
import ProfileScreen from '../screens/ProfileScreen';


export type AppStackParamList = {
  Home: undefined
  Details: undefined
  Welcome: undefined
  // Debug: undefined
  // Tabs: NavigatorScreenParams<TabParamList>
  // TalkDetails: { scheduleId: string }
  // WorkshopDetails: { scheduleId: string }
  // BreakDetails: { scheduleId: string }
}

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
  AppStackParamList,
  T
>

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator<AppStackParamList>()


// const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Welcome"}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Welcome" component={MainScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name='Sample' component={SampleScreen} />
    </Stack.Navigator>
  )
}