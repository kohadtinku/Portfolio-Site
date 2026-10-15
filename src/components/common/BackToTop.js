"use client";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const show = useScrollTrigger({ disableHysteresis: true, threshold: 500 });
  return (
    <Zoom in={show}>
      <Fab size="small" color="primary" aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
        sx={{ position: "fixed", bottom: 24, right: 24, zIndex: 1200 }}>
        <ArrowUp size={18} />
      </Fab>
    </Zoom>
  );
}
