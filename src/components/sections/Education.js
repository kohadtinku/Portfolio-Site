"use client";
import { Box, Container, Typography, Chip, Stack, Link as MuiLink } from "@mui/material";
import SectionHeading from "@/components/common/SectionHeading";
import { education, certifications } from "@/data/education";

export default function Education() {
  return (
    <Box component="section" id="education" aria-labelledby="edu-title" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <SectionHeading id="edu-title" title="Education and certifications" />
        <Box component="ol" sx={{ listStyle: "none", m: 0, p: 0, borderLeft: 2, borderColor: "divider", ml: 1 }}>
          {education.map((e) => (
            <Box component="li" key={e.degree} sx={{ position: "relative", pl: 4, pb: 4 }}>
              <Box sx={{ position: "absolute", left: -7, top: 8, width: 12, height: 12, borderRadius: "50%", bgcolor: e.status === "completed" ? "info.main" : "secondary.main" }} />
              <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap">
                <Typography component="h3" variant="h6" fontWeight={600}>{e.degree}</Typography>
                <Chip size="small" variant="outlined" label={e.status === "completed" ? "Completed" : "In progress"} />
              </Stack>
              <Typography color="text.secondary">{e.institution}</Typography>
              <Typography variant="body2" color="text.secondary">{e.period}</Typography>
            </Box>
          ))}
        </Box>
        {certifications.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography component="h3" variant="h6" fontWeight={600} sx={{ mb: 2 }}>Certifications</Typography>
            <Stack spacing={1}>
              {certifications.map((c) => (
                <Typography key={c.name}>
                  {c.url ? <MuiLink href={c.url} target="_blank" rel="noopener noreferrer">{c.name}</MuiLink> : c.name}
                  {c.issuer ? `, ${c.issuer}` : ""}{c.year ? ` (${c.year})` : ""}
                </Typography>
              ))}
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
}
