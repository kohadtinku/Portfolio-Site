"use client";
import { Box, Container, Typography, Stack, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Check } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { stats } from "@/data/profile";

const points = ["Frontend and backend development", "REST API design and integration", "Authentication and authorization", "Database design and integration", "Responsive UI development", "Debugging, deployment and performance optimization"];

export default function About() {
  return (
    <Box component="section" id="about" aria-labelledby="about-title" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading id="about-title" title="About me" />
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              I'm a MERN stack developer with about two years of professional experience. I work across the stack: building React interfaces, designing the APIs behind them, and shipping the result to production.
            </Typography>
            <Stack spacing={1.5}>
              {points.map((p) => (
                <Stack key={p} direction="row" spacing={1.5} alignItems="center">
                  <Check size={18} color="#22d3ee" aria-hidden />
                  <Typography>{p}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2}>
              {stats.map((s) => (
                <Paper key={s.label} variant="outlined" sx={{ p: 2.5, display: "flex", alignItems: "baseline", gap: 2, backdropFilter: "blur(8px)" }}>
                  <Typography variant="h3" sx={{ minWidth: 72, background: "linear-gradient(135deg,#5b8cff,#22d3ee)", WebkitBackgroundClip: "text", color: "transparent" }}>{s.value}</Typography>
                  <Typography color="text.secondary">{s.label}</Typography>
                </Paper>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
