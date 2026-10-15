"use client";
import { Box, Container, Stack, Typography, Link as MuiLink } from "@mui/material";
import SocialLinks from "@/components/common/SocialLinks";
import { navLinks, profile } from "@/data/profile";

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: "divider", py: 6, mt: 4 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" spacing={4}>
          <Box>
            <Typography fontWeight={700}>{profile.name}</Typography>
            <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 360 }}>
              Thanks for visiting. If you have a role or a project in mind, I'd like to hear about it.
            </Typography>
          </Box>
          <Stack component="nav" aria-label="Footer" direction="row" flexWrap="wrap" gap={2.5}>
            {navLinks.map((l) => (
              <MuiLink key={l.id} href={`/#${l.id}`} underline="hover" color="text.secondary">{l.label}</MuiLink>
            ))}
          </Stack>
          <SocialLinks />
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
