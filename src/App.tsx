import React from "react";
import { Text, View } from "react-native";
import Bouncing from "./bouncing";
import SwipableList from "./SwipeableListExample"
import { PanGestureHandler } from "react-native-gesture-handler";
import "./App.css";

function App() {
  return (
    <>
      <Text>Log PanGestureHandler </Text>

      <View
        style={{
          backgroundColor: "yellow",
          overflow: "hidden",
        }}
      >
        <PanGestureHandler
          onGestureEvent={(gestureEvent) => {
            console.log({ gestureEvent });
          }}
          onHandlerStateChange={(stateEvent) => {
            console.log({ stateEvent });
          }}
        >
          <View
            style={{
              backgroundColor: "blue",
              height: 100,
              width: 200,
              margin: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
        </PanGestureHandler>
      </View>
      <Text> Bouncing </Text>
      <Bouncing />
      <Text> Reanimated 2 SwipableList </Text>
      <SwipableList />
    </>
  );
}

export default App;
