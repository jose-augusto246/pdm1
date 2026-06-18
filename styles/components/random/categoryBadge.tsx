import React from "react";
import { StyleSheet, Text, View } from "react-native";

type badgeProps = {
  name: string;
};
export default function CategoryBadge({ name }: badgeProps) {
  return (
    <View style={styles.textborder}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  textborder: {
    backgroundColor: "#313131",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderStyle: "solid",
    borderRadius: 50,
    borderBottomWidth: 2,
  },
});
