import React from "react";
import { View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
