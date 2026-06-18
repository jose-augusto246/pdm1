import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Good morning</Text>
      <View style={styles.iconContainer}>
        <Feather name="bell" style={styles.icon} />
        <AntDesign name="history" style={styles.icon} color="white" />
        <Feather name="settings" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 18,
    paddingTop: 2,
  },
  icon: {
    color: "white",
    fontSize: 24,
  },
});
