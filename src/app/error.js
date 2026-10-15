"use client";
import { Container, Typography, Button } from "@mui/material";

export default function Error({ reset }) {
  return (
    <Container maxWidth="sm" sx={{ py: 16, textAlign: "center" }}>
      <Typography component="h1" variant="h3">Something went wrong</Typography>
      <Typography color="text.secondary" sx={{ my: 3 }}>An unexpected error occurred. Try again, or reload the page.</Typography>
      <Button onClick={reset} variant="contained">Try again</Button>
    </Container>
  );
}
