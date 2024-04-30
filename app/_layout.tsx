import 'expo-dev-client';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import '~/global.css';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1 bg-slate-700">
      <StatusBar style="light" />

      <Slot />
    </SafeAreaView>
  );
}
