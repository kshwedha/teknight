// src/navigation/RootNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  PartialState,
  NavigationState,
  NavigationAction,
  createNavigationContainerRef,
} from "@react-navigation/native"
import { AppStack } from './AppStack';

export const navigationRef = createNavigationContainerRef()
interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

const RootNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer ref={navigationRef} {...props}>
      <AppStack />
    </NavigationContainer>
  );
};

export default RootNavigator;
