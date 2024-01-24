import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Start from "./src/pages/Start";
import Rules from "./src/pages/Rules";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Rules />
    </>
  );
}
