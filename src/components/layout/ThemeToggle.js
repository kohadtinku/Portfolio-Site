"use client";
import { IconButton, Tooltip } from "@mui/material";
import { Sun, Moon } from "lucide-react";
import { useColorMode } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { mode, toggle } = useColorMode();
  const label = mode === "dark" ? "Switch to light mode" : "Switch to dark mode";
  return (
    <Tooltip title={label}>
      <IconButton onClick={toggle} aria-label={label} size="small" color="inherit">
        {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </IconButton>
    </Tooltip>
  );
}
