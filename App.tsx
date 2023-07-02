import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RootNavigator from './app/navigation/RootNavigator';
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import * as storage from "./app/utils/storage"
import { UseNavigationPersistence } from "./app/navigation"

type SectionProps = PropsWithChildren<{
  title: string;
}>;


export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = UseNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY)

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <RootNavigator
            initialState={true ? { index: 0, routes: [] } : initialNavigationState}
            onStateChange={onNavigationStateChange}
          />
    </SafeAreaProvider>
  );
}

// <SafeAreaView style={backgroundStyle}>
//   <StatusBar
//     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//     backgroundColor={backgroundStyle.backgroundColor}
//   />
//   <RootNavigator />
// </SafeAreaView>

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
