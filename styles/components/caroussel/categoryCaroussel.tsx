import { spacing } from "@/constants/spacing";
import { Category } from "@/mocks/albums";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CategoryBadge from "../random/categoryBadge";

type CarousselProps = {
  categories: Category[];
};

export default function CategoryCaroussel({ categories }: CarousselProps) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.row}>
          {categories.map((category, index) => (
            <CategoryBadge key={index} name={category.name} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  row: {
    flexDirection: "row",
    gap: spacing.xs,
  },
});
