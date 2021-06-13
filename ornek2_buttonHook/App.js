import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Sayac from "./Sayac";
export default function App() {
  return (
    <View style={styles.container}>
      <Sayac />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lavenderblush",
    justifyContent: "center",
    alignItems: "center",
  },
});
