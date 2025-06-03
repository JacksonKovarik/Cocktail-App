import React from "react";
import { Animated, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarBackground: () => (
            <LinearGradient colors={['rgba(68, 0, 79, 1)', '#FF5029']} style={{flex: 1}} locations={[0, 1]} />
        ),

        tabBarIcon: ({ focused }) => {
          let iconName;
          let scaleValue = new Animated.Value(1);
          let tranValue = new Animated.Value(1);

          let bgColor = ["transparent", "transparent"];
          let size = 30;


          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }
          else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "DrinkMenu") {
            iconName = focused ? "beer" : "beer-outline";
          } else if (route.name === "GameMenu") {
            iconName = focused ? "game-controller" : "game-controller-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          if (focused) {
            Animated.spring(scaleValue, {
              toValue: 2,
              friction: 3,
              useNativeDriver: true,
            }).start();
          } else {
            Animated.spring(scaleValue, {
              toValue: 1,
              friction: 3,
              useNativeDriver: true,
            }).start();
          }

          if (focused) {
            Animated.timing(tranValue, {
              toValue: -20,
              // friction: 3,
              duration: 300,
              useNativeDriver: true,
            }).start();

            bgColor = ['rgba(220, 0, 255, .22)', 'rgba(255, 83, 44, 1)'];
            size = 38;
          }else {
            Animated.timing(tranValue, {
              toValue: 1,
              // friction: 3,
              useNativeDriver: true,
            }).start();
          }

          return (
            <Animated.View style={{ transform: [ { translateY: tranValue }, { scale: scaleValue }], justifyContent: "flex-end", alignItems: "center", height: 100, width: 40 }}>
              <LinearGradient colors={bgColor}  style={{ height: 70, width: 45, borderTopRightRadius: 15, borderTopLeftRadius: 15, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 5 }} >
                <Ionicons name={iconName} size={size} color={"white"} />
              </LinearGradient>
            </Animated.View>
          );
        },
    
        tabBarStyle: {
            position: "absolute",
            bottom: -80,
            height: 150,
            borderTopWidth: 0,
            width: "100%",
            elevation: 0,
        },
        tabBarShowLabel: false,
        header: header,
      })}
    >
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="Search" />
      <Tabs.Screen name="DrinkMenu" />
      <Tabs.Screen name="GameMenu" />
      <Tabs.Screen name="Profile" />
    </Tabs>
  );
}


const header = () => {
  return (
    <View style={{ height: 110, backgroundColor: 'rgba(68, 0, 79, 1)', justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 20 }}>
        <View style={{height: 50, width: 50, borderRadius: 25, backgroundColor: 'white'}} ></View>
    </View>
  );
}