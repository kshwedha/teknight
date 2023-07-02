// src/screens/DetailsScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import {
  useColorScheme,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const DetailsScreen: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <View>
      <Text>Welcome to the Details Screen!</Text>
    </View>
  );
};

export default DetailsScreen;
