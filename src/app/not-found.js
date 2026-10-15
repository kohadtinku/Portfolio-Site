import Link from "next/link";
import { Container, Typography, Button } from "@mui/material";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ py: 16, textAlign: "center" }}>
      <Typography component="h1" variant="h2">Page not found</Typography>
      <Typography color="text.secondary" sx={{ my: 3 }}>The page you're looking for doesn't exist or has moved.</Typography>
      <Button component={Link} href="/" variant="contained">Back to home</Button>
    </Container>
  );
}
