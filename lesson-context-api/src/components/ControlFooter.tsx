import { StyleSheet, Text } from "react-native";
import { useAppContext } from "../contexts/AppContext";
import { useThemeContext } from "../contexts/ThemeContext";

export default function ControlFooter() {
  const app = useAppContext();
  const { colors } = useThemeContext();

  return (
    <Text style={[styles.text, { color: colors.color }]}>
      {app.musicTime} remaining on Track {app.track}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 16,
    fontSize: 12,
  },
});
