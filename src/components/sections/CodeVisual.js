"use client";
import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";

const badges = [
  { label: "React", top: "-4%", left: "-6%", color: "#22d3ee", delay: 0 },
  { label: "Next.js", top: "8%", right: "-6%", color: "#e8ecf8", delay: 0.6 },
  { label: "Node.js", bottom: "14%", left: "-8%", color: "#34d399", delay: 1.2 },
  { label: "Express", bottom: "-4%", right: "6%", color: "#a5b4fc", delay: 0.3 },
  { label: "MongoDB", top: "44%", right: "-10%", color: "#4ade80", delay: 0.9 },
];

const lines = [
  ["const", " app ", "=", " express();"],
  ["app.use(", "cors", ", ", "auth", ");"],
  ["", "", "", ""],
  ["app.get(", "'/api/projects'", ", async (req, res) => {"],
  ["  const data = await Project.find();"],
  ["  res.json(data);"],
  ["});"],
];

export default function CodeVisual({ reduce }) {
  return (
    <Box aria-hidden="true" sx={{ position: "relative", mx: { xs: 2, md: 0 } }}>
      <Box sx={(t) => ({
        borderRadius: 3, p: 2.5, backdropFilter: "blur(10px)",
        bgcolor: alpha(t.palette.background.paper, t.palette.mode === "dark" ? 0.7 : 0.9),
        border: `1px solid ${t.palette.divider}`,
        boxShadow: "0 24px 60px rgba(8,12,30,.45), 0 0 0 1px rgba(91,140,255,.08)",
      })}>
        <Box sx={{ display: "flex", gap: 0.75, mb: 2 }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => <Box key={c} sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: c }} />)}
        </Box>
        <Box component="pre" sx={{ m: 0, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 13, lineHeight: 1.9, color: "text.secondary", overflowX: "auto" }}>
          {lines.map((l, i) => (
            <Box component="div" key={i} sx={{ minHeight: "1.9em" }}>
              <Box component="span" sx={{ color: "#8b5cf6" }}>{l[0]}</Box>
              <Box component="span">{l.slice(1).join("")}</Box>
            </Box>
          ))}
        </Box>
      </Box>
      {badges.map(({ label, delay, color, ...pos }) => (
        <motion.div key={label} style={{ position: "absolute", ...pos }}
          animate={reduce ? undefined : { y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}>
          <Typography variant="caption" sx={(t) => ({
            px: 1.5, py: 0.75, borderRadius: 99, fontWeight: 600, display: "block",
            bgcolor: alpha(t.palette.background.paper, 0.9), border: `1px solid ${alpha(color, 0.5)}`, color: "text.primary",
            boxShadow: `0 0 18px ${alpha(color, 0.25)}` })}>
            {label}
          </Typography>
        </motion.div>
      ))}
    </Box>
  );
}
