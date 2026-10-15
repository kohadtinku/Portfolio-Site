"use client";
import { Box, Container, Typography, Chip, Stack } from "@mui/material";
import SectionHeading from "@/components/common/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Box component="section" id="experience" aria-labelledby="exp-title" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <SectionHeading id="exp-title" title="Professional experience" />
        {experience.length === 0 ? (
          <Typography color="text.secondary">Experience details are coming soon.</Typography>
        ) : (
          <Box component="ol" sx={{ listStyle: "none", m: 0, p: 0, borderLeft: 2, borderColor: "divider", ml: 1 }}>
            {experience.map((e, i) => (
              <Box component="li" key={`${e.company}-${i}`} sx={{ position: "relative", pl: 4, pb: 5 }}>
                <Box sx={{ position: "absolute", left: -7, top: 8, width: 12, height: 12, borderRadius: "50%", background: "linear-gradient(135deg,#5b8cff,#8b5cf6)" }} />
                <Typography component="h3" variant="h5" fontWeight={600}>{e.title}</Typography>
                <Typography color="primary" fontWeight={500}>{e.company}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{e.duration}{e.location ? `, ${e.location}` : ""}</Typography>
                <Box component="ul" sx={{ pl: 2.5, m: 0, color: "text.secondary" }}>
                  {e.responsibilities?.map((r) => <li key={r}><Typography color="inherit">{r}</Typography></li>)}
                </Box>
                {e.achievements?.length > 0 && (
                  <Box component="ul" sx={{ pl: 2.5, mt: 1.5, mb: 0 }}>
                    {e.achievements.map((a) => <li key={a}><Typography>{a}</Typography></li>)}
                  </Box>
                )}
                <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
                  {e.tech?.map((t) => <Chip key={t} size="small" label={t} />)}
                </Stack>
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
