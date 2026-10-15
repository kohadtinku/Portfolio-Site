"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Box, Container, Typography, TextField, Button, Stack, CircularProgress, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Copy, Send } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import SocialLinks from "@/components/common/SocialLinks";
import { profile } from "@/data/profile";
import { EMAIL_RE, LIMITS } from "@/lib/validation";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm({ defaultValues: { name: "", email: "", subject: "", message: "", website: "" } });
  const [failed, setFailed] = useState("");

  const onSubmit = async (data) => {
    setFailed("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Message could not be sent.");
      toast.success("Message sent. I'll reply by email.");
      reset();
    } catch (err) {
      const msg = err.message || "Message could not be sent.";
      setFailed(msg);
      toast.error(msg);
    }
  };

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); toast.success("Email copied."); }
    catch { toast.error("Copy failed. Select the address and copy it manually."); }
  };

  return (
    <Box component="section" id="contact" aria-labelledby="contact-title" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading id="contact-title" title="Get in touch" subtitle="Have a role or project in mind? Send a message and I'll reply by email." />
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography color="text.secondary">Email</Typography>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
              <Typography component="a" href={`mailto:${profile.email}`} sx={{ color: "text.primary", fontWeight: 600, wordBreak: "break-all" }}>{profile.email}</Typography>
              <Button size="small" onClick={copyEmail} startIcon={<Copy size={14} />} aria-label="Copy email address">Copy</Button>
            </Stack>
            <SocialLinks />
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper variant="outlined" component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ p: { xs: 2.5, md: 4 } }} aria-label="Contact form">
              <Stack spacing={2.5}>
                <TextField label="Name" autoComplete="name" error={!!errors.name} helperText={errors.name?.message} {...register("name", { required: "Enter your name.", minLength: { value: 2, message: "Enter at least 2 characters." }, maxLength: { value: LIMITS.name, message: `Keep it under ${LIMITS.name} characters.` } })} />
                <TextField label="Email" type="email" autoComplete="email" error={!!errors.email} helperText={errors.email?.message} {...register("email", { required: "Enter your email.", pattern: { value: EMAIL_RE, message: "Enter a valid email address." } })} />
                <TextField label="Subject" error={!!errors.subject} helperText={errors.subject?.message} {...register("subject", { required: "Enter a subject.", minLength: { value: 3, message: "Enter at least 3 characters." }, maxLength: { value: LIMITS.subject, message: `Keep it under ${LIMITS.subject} characters.` } })} />
                <TextField label="Message" multiline minRows={5} error={!!errors.message} helperText={errors.message?.message} {...register("message", { required: "Write a message.", minLength: { value: 10, message: "Write at least 10 characters." }, maxLength: { value: LIMITS.message, message: `Keep it under ${LIMITS.message} characters.` } })} />
                {/* Honeypot: hidden from people, filled by bots */}
                <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: -9999, opacity: 0 }} {...register("website")} />
                {failed && <Typography color="error" role="alert">{failed}</Typography>}
                <Button type="submit" variant="contained" size="large" disabled={isSubmitting} startIcon={isSubmitting ? <CircularProgress size={16} color="inherit" /> : <Send size={16} />} sx={{ alignSelf: "flex-start" }}>
                  {isSubmitting ? "Sending" : "Send message"}
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
