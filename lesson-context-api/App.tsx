import { StyleSheet, View } from "react-native";
import Home from "./src/pages/Home";
import AppContextProvider from "./src/contexts/AppContext";
import ThemeContextProvider from "./src/contexts/ThemeContext";

export default function App() {
  return (
    <ThemeContextProvider>
      <AppContextProvider>
        <View style={styles.container}>
          <Home />
        </View>
      </AppContextProvider>
    </ThemeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
