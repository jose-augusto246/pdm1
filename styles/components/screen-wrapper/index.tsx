import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import React, { PropsWithChildren, useRef, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, View, TouchableOpacity, Animated, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Footer from "../footer";

export default function ScreenWrapper({ children }: PropsWithChildren) {
  const scrollViewRef = useRef<ScrollView>(null);
  const [showToTop, setShowToTop] = useState(false);
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY > 200 && !showToTop) {
      setShowToTop(true);
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else if (scrollY <= 200 && showToTop) {
      setShowToTop(false);
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.children}>{children}</View>
      </ScrollView>

      <Footer />

      <Animated.View style={[styles.floatingButtonContainer, { opacity: opacityAnim }]} pointerEvents={showToTop ? "auto" : "none"}>
        <TouchableOpacity style={styles.floatingButton} onPress={scrollToTop} activeOpacity={0.8}>
          <Ionicons name="arrow-up" size={24} color={colors.background} />
        </TouchableOpacity>
      </Animated.View>

      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "space-between",
  },
  children: {
    padding: spacing.md,
    gap: spacing.xl,
  },
  floatingButtonContainer: {
    position: "absolute",
    bottom: 90,
    right: 20,
    zIndex: 10,
  },
  floatingButton: {
    backgroundColor: colors.foreground,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});
