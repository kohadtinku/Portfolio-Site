"use client";
import { Box, Container, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SectionHeading from "@/components/common/SectionHeading";
import { process } from "@/data/process";

export default function Process() {
  return (
    <Box component="section" id="process" aria-labelledby="process-title" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading id="process-title" title="How I work" subtitle="From first conversation to production." />
        <Grid component="ol" container spacing={2} sx={{ listStyle: "none", p: 0, m: 0 }}>
          {process.map(([title, text], i) => (
            <Grid component="li" key={title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper variant="outlined" sx={{ p: 2.5, height: "100%" }}>
                <Typography sx={{ fontWeight: 700, color: "info.main", mb: 1 }}>{i + 1}</Typography>
                <Typography component="h3" fontWeight={600} sx={{ mb: 0.5 }}>{title}</Typography>
                <Typography variant="body2" color="text.secondary">{text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
