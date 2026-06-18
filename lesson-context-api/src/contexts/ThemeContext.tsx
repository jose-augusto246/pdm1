import { PropsWithChildren, createContext, useContext, useState } from "react";
import { dark, light } from "./themes";

export interface ThemeContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  colors: typeof light;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export default function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const themeContext: ThemeContextProps = {
    theme,
    toggleTheme: () => setTheme((atheme) => (atheme === "light" ? "dark" : "light")),
    colors: theme === "light" ? light : dark,
  };

  return (
    <ThemeContext.Provider value={themeContext}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useThemeContext must be used inside ThemeContextProvider!");
  }

  return context;
}
