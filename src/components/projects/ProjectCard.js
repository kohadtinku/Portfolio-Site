"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardActions, Box, Typography, Chip, Stack, Button } from "@mui/material";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project: p }) {
  return (
    <Card variant="outlined" sx={{ height: "100%", display: "flex", flexDirection: "column", transition: "transform .2s, border-color .2s, box-shadow .2s",
      "&:hover": { transform: "translateY(-4px)", borderColor: "primary.main", boxShadow: "0 16px 40px rgba(91,140,255,.18)" },
      "@media (prefers-reduced-motion: reduce)": { "&:hover": { transform: "none" } } }}>
      <Box sx={{ position: "relative", aspectRatio: "16/10" }}>
        <Image src={p.image} alt={`${p.title} preview`} fill sizes="(max-width:900px) 100vw, 50vw" style={{ objectFit: "cover" }} unoptimized={p.image.endsWith(".svg")} />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
          <Chip size="small" label={p.status === "completed" ? "Completed" : "In development"} color={p.status === "completed" ? "info" : "secondary"} variant="outlined" />
          <Chip size="small" label={p.category} variant="outlined" />
        </Stack>
        <Typography component="h3" variant="h6" fontWeight={600}>{p.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ my: 1.5 }}>{p.problem}</Typography>
        <Box component="ul" sx={{ pl: 2.25, m: 0, color: "text.secondary", fontSize: 14 }}>
          {p.features.slice(0, 3).map((f) => <li key={f}>{f}</li>)}
        </Box>
        <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mt: 2 }}>
          {p.tech.map((t) => <Chip key={t} size="small" label={t} />)}
        </Stack>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2, flexWrap: "wrap", gap: 1 }}>
        <Button component={Link} href={`/projects/${p.slug}`} variant="contained" size="small">View details</Button>
        {p.github && <Button href={p.github} target="_blank" rel="noopener noreferrer" size="small" startIcon={<Github size={16} />}>Code</Button>}
        {p.live && <Button href={p.live} target="_blank" rel="noopener noreferrer" size="small" startIcon={<ExternalLink size={16} />}>Live demo</Button>}
      </CardActions>
    </Card>
  );
}
