// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { SCREENS } from '../navigation/ScreenNames';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(SCREENS.DETAILS)}
      />
    </View>
  );
};

export default HomeScreen;