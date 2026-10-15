"use client";
import { Box, Container, Typography, Paper, Chip, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Monitor, Server, Database, Wrench } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { skills } from "@/data/skills";

const icons = { monitor: Monitor, server: Server, database: Database, wrench: Wrench };

export default function Skills() {
  return (
    <Box component="section" id="skills" aria-labelledby="skills-title" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading id="skills-title" title="Technical skills" subtitle="The tools I use day to day." />
        <Grid container spacing={3}>
          {skills.map(({ category, icon, items }) => {
            const Icon = icons[icon] || Wrench;
            return (
              <Grid key={category} size={{ xs: 12, md: 6 }}>
                <Paper variant="outlined" sx={{ p: 3, height: "100%", transition: "border-color .2s", "&:hover": { borderColor: "primary.main" } }}>
                  <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                    <Icon size={22} color="#5b8cff" aria-hidden />
                    <Typography component="h3" variant="h6" fontWeight={600}>{category}</Typography>
                  </Stack>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {items.map((s) => <Chip key={s} label={s} variant="outlined" />)}
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
