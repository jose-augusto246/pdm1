import { Button, StyleSheet, View } from "react-native";
import { useAppContext } from "../contexts/AppContext";
import { useThemeContext } from "../contexts/ThemeContext";
import ControlFooter from "./ControlFooter";

export default function Control() {
  const app = useAppContext();
  const { colors, toggleTheme } = useThemeContext();

  return (
    <>
      <View style={[styles.container, { backgroundColor: colors.backgroundColor }]}>
        <Button title="Prev" onPress={() => app.prev()} />
        <Button title="Mudar Tema" onPress={toggleTheme} />
        <Button title="Next" onPress={() => app.next()} />
      </View>
      <ControlFooter />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10
  },
});
