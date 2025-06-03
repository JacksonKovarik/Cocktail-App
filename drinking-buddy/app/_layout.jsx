import { Stack }from "expo-router/stack";
import React from "react";
import { useFonts } from "expo-font"
// import { KeyboardProvider } from "react-native-keyboard-controller"

export default function RootLayout() {

  useFonts({
    'jbold': require('@/app/assets/fonts/Judson/Judson-Bold.ttf'),
    'jreg': require('@/app/assets/fonts/Judson/Judson-Regular.ttf'),
    'jit': require('@/app/assets/fonts/Judson/Judson-Italic.ttf')
  });

  return (
    // <KeyboardProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    // </KeyboardProvider>
  );
}
