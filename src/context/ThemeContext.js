import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const themes = {
    dark: {
      color: "white",
      backgroundColor: "black",
    },
    light: {
      color: "black",
      backgroundColor: "white",
    },
  };

  const [theme, setTheme] = useState(themes.dark);

  const setDark = () => {
    setTheme(themes.dark);
  };
  const setLight = () => {
    setTheme(themes.light);
  };

  return <ThemeContext.Provider value={{ theme, setLight, setDark }}>{children}</ThemeContext.Provider>;
};
