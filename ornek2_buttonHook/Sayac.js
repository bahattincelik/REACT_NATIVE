import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Sayac = () => {
  const [sayi, setSayi] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.sayi}></View>
    </View>
  );
};

export default Sayac;

const styles = StyleSheet.create({
  container: {
    width: 300,
    alignItems: "center",
  },
});
