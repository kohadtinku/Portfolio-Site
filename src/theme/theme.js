import { createTheme } from "@mui/material/styles";

const font = 'var(--font-geist-sans), system-ui, -apple-system, "Segoe UI", sans-serif';

export const getTheme = (mode) =>
  createTheme({
    cssVariables: false,
    palette: {
      mode,
      primary: { main: mode === "dark" ? "#5b8cff" : "#2f5bea" },
      secondary: { main: "#8b5cf6" },
      info: { main: "#22d3ee" },
      background:
        mode === "dark"
          ? { default: "#0a0f1e", paper: "#111832" }
          : { default: "#f5f7fc", paper: "#ffffff" },
      text:
        mode === "dark"
          ? { primary: "#e8ecf8", secondary: "#9aa6c4" }
          : { primary: "#0f172a", secondary: "#475569" },
      divider: mode === "dark" ? "rgba(148,163,255,0.14)" : "rgba(15,23,42,0.12)",
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: font,
      h1: { fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 },
      h2: { fontWeight: 700, letterSpacing: "-0.02em" },
      h3: { fontWeight: 600, letterSpacing: "-0.01em" },
      button: { textTransform: "none", fontWeight: 600 },
      body1: { lineHeight: 1.7 },
    },
    components: {
      MuiButton: { defaultProps: { disableElevation: true }, styleOverrides: { root: { borderRadius: 10, padding: "10px 22px" } } },
    },
  });
