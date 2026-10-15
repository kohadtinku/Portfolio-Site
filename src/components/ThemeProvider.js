"use client";
import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Toaster } from "react-hot-toast";
import { getTheme } from "@/theme/theme";

const ColorModeContext = createContext({ mode: "dark", toggle: () => {} });
export const useColorMode = () => useContext(ColorModeContext);

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark"); // dark by default; stored choice applied after mount

  useEffect(() => {
    try {
      const saved = localStorage.getItem("color-mode");
      if (saved === "light" || saved === "dark") setMode(saved);
    } catch {}
  }, []);

  const toggle = useCallback(() => {
    setMode((m) => {
      const next = m === "dark" ? "light" : "dark";
      try { localStorage.setItem("color-mode", next); } catch {}
      return next;
    });
  }, []);

  const theme = useMemo(() => getTheme(mode), [mode]);
  const value = useMemo(() => ({ mode, toggle }), [mode, toggle]);

  return (
    <AppRouterCacheProvider>
      <ColorModeContext.Provider value={value}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <Toaster position="bottom-right" />
        </MuiThemeProvider>
      </ColorModeContext.Provider>
    </AppRouterCacheProvider>
  );
}
