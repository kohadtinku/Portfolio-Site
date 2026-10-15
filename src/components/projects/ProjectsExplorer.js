"use client";
import { useMemo, useState } from "react";
import { Box, Chip, InputAdornment, Stack, TextField, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Search } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function ProjectsExplorer() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return projects.filter((p) => (cat === "All" || p.category === cat) &&
      (!s || [p.title, p.problem, ...p.tech].join(" ").toLowerCase().includes(s)));
  }, [q, cat]);

  return (
    <>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="space-between" sx={{ mb: 4 }}>
        <Stack direction="row" flexWrap="wrap" gap={1} role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <Chip key={c} label={c} clickable onClick={() => setCat(c)} color={cat === c ? "primary" : "default"} variant={cat === c ? "filled" : "outlined"} aria-pressed={cat === c} />
          ))}
        </Stack>
        <TextField size="small" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects or tech" inputProps={{ "aria-label": "Search projects" }}
          InputProps={{ startAdornment: <InputAdornment position="start"><Search size={16} /></InputAdornment> }} />
      </Stack>
      {list.length === 0 ? (
        <Box sx={{ py: 6, textAlign: "center" }}>
          <Typography color="text.secondary" sx={{ mb: 2 }}>No projects match your search.</Typography>
          <Button onClick={() => { setQ(""); setCat("All"); }}>Clear filters</Button>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {list.map((p) => <Grid key={p.slug} size={{ xs: 12, md: 6 }}><ProjectCard project={p} /></Grid>)}
        </Grid>
      )}
    </>
  );
}
