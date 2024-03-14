import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import LoginScreen from "./App/Screen/LoginScreen/LoginScreen";
// import { ClerkProvider } from "@clerk/clerk-expo";
import Constants from "expo-constants";
// import { SignedIn } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { UserLocationContext } from "./App/Context/UserLocationContext";

import * as Location from "expo-location";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-SemiBold.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
  });

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    // <ClerkProvider publishableKey={"pk_test_aW5maW5pdGUtbWFydGVuLTEzLmNsZXJrLmFjY291bnRzLmRldiQ"}>
    // <ClerkProvider>
    <UserLocationContext.Provider value={{ location, setLocation }}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        {/* <SignedIn>

      </SignedIn> */}
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
        {/* <LoginScreen />
      <StatusBar style="auto" /> */}
      </View>
    </UserLocationContext.Provider>
    // </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 25,
  },
});
