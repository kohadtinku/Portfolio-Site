"use client";
import { Box, Container, Typography, Button, Stack, Chip } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import SocialLinks from "@/components/common/SocialLinks";
import CodeVisual from "./CodeVisual";

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => reduce ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } };

  return (
    <Box component="section" id="home" aria-labelledby="hero-title"
      sx={(t) => ({
        position: "relative", overflow: "hidden", py: { xs: 8, md: 14 },
        background: t.palette.mode === "dark"
          ? "radial-gradient(60% 50% at 80% 10%, rgba(139,92,246,.22), transparent), radial-gradient(50% 40% at 10% 0%, rgba(34,211,238,.12), transparent)"
          : "radial-gradient(60% 50% at 80% 10%, rgba(139,92,246,.12), transparent)",
      })}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div {...fade(0)}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                <Typography variant="h6" color="text.secondary" fontWeight={500}>Hi, I'm {profile.name}</Typography>
                {profile.availability.show && (
                  <Chip size="small" label={profile.availability.text}
                    icon={<Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#34d399", ml: "8px !important" }} />} variant="outlined" />
                )}
              </Stack>
            </motion.div>
            <motion.div {...fade(0.08)}>
              <Typography id="hero-title" component="h1" variant="h1" sx={{ fontSize: { xs: 44, sm: 60, md: 76 } }}>
                {profile.role}
              </Typography>
            </motion.div>
            <motion.div {...fade(0.16)}>
              <Typography variant="h5" color="text.secondary" sx={{ mt: 3, maxWidth: 560, fontWeight: 400, fontSize: { xs: 18, md: 22 } }}>
                {profile.tagline}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 560 }}>{profile.intro}</Typography>
            </motion.div>
            <motion.div {...fade(0.24)}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }} alignItems={{ sm: "center" }}>
                <Button href="#projects" variant="contained" size="large"
                  sx={{ background: "linear-gradient(135deg,#4f7cff,#8b5cf6)", boxShadow: "0 8px 30px rgba(91,140,255,.35)" }}>
                  View my projects
                </Button>
                <Button href={profile.resume} download variant="outlined" size="large">Download resume</Button>
                <Button href="#contact" color="inherit" size="large" sx={{ color: "text.secondary" }}>Contact me</Button>
              </Stack>
              <Box sx={{ mt: 3 }}><SocialLinks /></Box>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <CodeVisual reduce={reduce} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
