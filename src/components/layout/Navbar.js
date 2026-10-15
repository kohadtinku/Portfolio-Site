"use client";
import { useEffect, useState } from "react";
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItemButton, ListItemText, Stack, Container, useScrollTrigger } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Menu, X, Download } from "lucide-react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { navLinks, profile } from "@/data/profile";

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 24 });
  const active = useActiveSection(ids);
  const base = usePathname() === "/" ? "" : "/";

  return (
    <>
      <AppBar position="sticky" color="transparent" elevation={0}
        sx={(t) => ({
          backdropFilter: scrolled ? "blur(14px)" : "none",
          backgroundColor: scrolled ? alpha(t.palette.background.default, 0.78) : "transparent",
          borderBottom: `1px solid ${scrolled ? t.palette.divider : "transparent"}`,
          transition: "background-color .25s, border-color .25s",
        })}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 68, justifyContent: "space-between" }}>
            <Box component="a" href={`${base}#home`} aria-label={`${profile.name} home`}
              sx={{ fontWeight: 800, fontSize: 20, letterSpacing: "-0.04em", color: "text.primary", textDecoration: "none",
                    display: "grid", placeItems: "center", width: 40, height: 40, borderRadius: "10px",
                    background: "linear-gradient(135deg,#5b8cff,#8b5cf6)", color: "#fff" }}>
              {profile.initials}
            </Box>

            <Stack direction="row" component="nav" aria-label="Primary" spacing={0.5} sx={{ display: { xs: "none", md: "flex" } }}>
              {navLinks.map((l) => (
                <Button key={l.id} href={`${base}#${l.id}`} color="inherit" aria-current={active === l.id ? "true" : undefined}
                  sx={{ color: active === l.id ? "text.primary" : "text.secondary", position: "relative", px: 1.75,
                        "&::after": { content: '""', position: "absolute", left: 14, right: 14, bottom: 4, height: 2, borderRadius: 1,
                                      background: "linear-gradient(90deg,#5b8cff,#22d3ee)", transform: active === l.id ? "scaleX(1)" : "scaleX(0)", transition: "transform .25s" } }}>
                  {l.label}
                </Button>
              ))}
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <Button href={profile.resume} download variant="outlined" size="small" startIcon={<Download size={16} />}
                sx={{ display: { xs: "none", sm: "inline-flex" } }}>Resume</Button>
              <ThemeToggle />
              <IconButton onClick={() => setOpen(true)} aria-label="Open menu" sx={{ display: { md: "none" } }} color="inherit">
                <Menu size={22} />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: 280, p: 2 } }}>
        <Stack direction="row" justifyContent="flex-end">
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu" color="inherit"><X size={22} /></IconButton>
        </Stack>
        <List component="nav" aria-label="Mobile">
          {navLinks.map((l) => (
            <ListItemButton key={l.id} component="a" href={`${base}#${l.id}`} selected={active === l.id} onClick={() => setOpen(false)} sx={{ borderRadius: 2 }}>
              <ListItemText primary={l.label} />
            </ListItemButton>
          ))}
        </List>
        <Button href={profile.resume} download variant="contained" startIcon={<Download size={16} />} sx={{ mt: 2 }}>Download resume</Button>
      </Drawer>
    </>
  );
}
