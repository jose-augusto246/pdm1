import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Timeline from "../components/Timeline";
import Control from "../components/Control";
import { useThemeContext } from "../contexts/ThemeContext";

export default function Home() {
  const { colors } = useThemeContext();

  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundColor }]}>
      <Text style={[styles.text, { color: colors.color }]}>Home</Text>
      <Timeline />
      <Control />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
