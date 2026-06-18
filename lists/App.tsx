import { StatusBar } from "expo-status-bar";
import {
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import motodata from "./data/motodata";
import proccessData from "./helpers/convertData";
import { useEffect, useState } from "react";


export default function App() {
  const sections = proccessData(motodata);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>🏍️ Garagem de Motos</Text>
            <Text style={styles.subtitle}>
              Catálogo completo com {motodata.length} motocicletas agrupadas
            </Text>
          </View>

          {/* Lista Seccionada */}
          <SectionList
            sections={sections}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.itemCard}>
                <View style={styles.itemRow}>
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemModel}>{item.model}</Text>
                    <Text style={styles.itemBrand}>{item.brand}</Text>
                  </View>
                  <View style={styles.itemBadge}>
                    <Text style={styles.itemYear}>{item.year}</Text>
                  </View>
                </View>
              </View>
            )}
            renderSectionHeader={({ section: { title, data } }) => (
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <View style={styles.sectionBadge}>
                  <Text style={styles.sectionBadgeText}>{data.length}</Text>
                </View>
              </View>
            )}
            renderSectionFooter={({ section: { data } }) => (
              <View style={styles.sectionFooter}>
                <Text style={styles.sectionFooterText}>
                  Total: {data.length} {data.length === 1 ? "motocicleta" : "motocicletas"}
                </Text>
              </View>
            )}
            stickySectionHeadersEnabled={true}
            contentContainerStyle={styles.listContent}
            initialNumToRender={15}
            maxToRenderPerBatch={20}
            windowSize={10}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#090909",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f4f4f5", // Zinc 100
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: "#a1a1aa", // Zinc 400
    marginTop: 4,
  },
  listContent: {
    paddingBottom: 32,
  },
  sectionHeader: {
    backgroundColor: "#27272a", // Zinc 800 (Fundo destacado e fixo)
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f4f4f5",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  sectionBadge: {
    backgroundColor: "#4f46e5", // Indigo 600
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  sectionBadgeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  sectionFooter: {
    borderBottomWidth: 1,
    borderBottomColor: "#18181b",
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: "flex-end",
    marginBottom: 8,
  },
  sectionFooterText: {
    fontSize: 12,
    color: "#71717a", // Zinc 500
    fontStyle: "italic",
  },
  itemCard: {
    backgroundColor: "#18181b", // Zinc 900
    borderColor: "#27272a", // Zinc 800
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemInfo: {
    flex: 1,
    marginRight: 10,
  },
  itemModel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#f4f4f5",
    marginBottom: 4,
  },
  itemBrand: {
    fontSize: 13,
    color: "#a1a1aa",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  itemBadge: {
    backgroundColor: "#1e1b4b", // Azul índigo escuro
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderColor: "#312e81",
    borderWidth: 1,
  },
  itemYear: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#c7d2fe", // Índigo claro
  },
});
