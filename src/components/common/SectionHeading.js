"use client";
import { Box, Typography } from "@mui/material";

export default function SectionHeading({ title, subtitle, id }) {
  return (
    <Box sx={{ mb: { xs: 5, md: 7 }, maxWidth: 640 }}>
      <Typography id={id} component="h2" variant="h2" sx={{ fontSize: { xs: 30, md: 40 } }}>{title}</Typography>
      <Box sx={{ width: 56, height: 3, borderRadius: 2, my: 2, background: "linear-gradient(90deg,#5b8cff,#22d3ee)" }} />
      {subtitle && <Typography color="text.secondary">{subtitle}</Typography>}
    </Box>
  );
}
