"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Typography, Chip, Stack, Button, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

const img = (src, alt) => (
  <Box sx={{ position: "relative", aspectRatio: "16/10", borderRadius: 2, overflow: "hidden", border: 1, borderColor: "divider" }}>
    <Image src={src} alt={alt} fill sizes="(max-width:900px) 100vw, 50vw" style={{ objectFit: "cover" }} unoptimized={src.endsWith(".svg")} />
  </Box>
);

export default function ProjectDetail({ project: p }) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
      <Button component={Link} href="/projects" startIcon={<ArrowLeft size={16} />} sx={{ mb: 3 }}>All projects</Button>
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Chip size="small" label={p.status === "completed" ? "Completed" : "In development"} color={p.status === "completed" ? "info" : "secondary"} variant="outlined" />
        <Chip size="small" label={p.category} variant="outlined" />
      </Stack>
      <Typography component="h1" variant="h2" sx={{ fontSize: { xs: 32, md: 48 } }}>{p.title}</Typography>
      <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 720 }}>{p.description}</Typography>
      <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mt: 3 }}>
        {p.github ? <Button variant="outlined" href={p.github} target="_blank" rel="noopener noreferrer" startIcon={<Github size={16} />}>View code</Button>
          : <Chip label="Repository not published" variant="outlined" />}
        {p.live ? <Button variant="contained" href={p.live} target="_blank" rel="noopener noreferrer" startIcon={<ExternalLink size={16} />}>Live demo</Button>
          : <Chip label="No live demo yet" variant="outlined" />}
      </Stack>

      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid size={{ xs: 12, md: 6 }}>{img(p.image, `${p.title} main screen`)}</Grid>
        {p.screenshots.map((s, i) => <Grid key={s} size={{ xs: 12, md: 6 }}>{img(s, `${p.title} screenshot ${i + 2}`)}</Grid>)}
      </Grid>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography component="h2" variant="h5" fontWeight={600} sx={{ mb: 1 }}>The problem</Typography>
          <Typography color="text.secondary">{p.problem}</Typography>
          <Typography component="h2" variant="h5" fontWeight={600} sx={{ mt: 4, mb: 1 }}>Key features</Typography>
          <Box component="ul" sx={{ pl: 2.5, color: "text.secondary" }}>{p.features.map((f) => <li key={f}>{f}</li>)}</Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography component="h2" variant="h5" fontWeight={600} sx={{ mb: 1.5 }}>Architecture</Typography>
          <Stack spacing={1.5}>
            {p.architecture.map(([layer, text]) => (
              <Paper key={layer} variant="outlined" sx={{ p: 2 }}>
                <Typography fontWeight={600}>{layer}</Typography>
                <Typography variant="body2" color="text.secondary">{text}</Typography>
              </Paper>
            ))}
          </Stack>
          <Typography component="h2" variant="h5" fontWeight={600} sx={{ mt: 4, mb: 1.5 }}>Tech stack</Typography>
          <Stack direction="row" flexWrap="wrap" gap={1}>{p.tech.map((t) => <Chip key={t} label={t} />)}</Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
