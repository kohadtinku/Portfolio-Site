import { Container, Typography } from "@mui/material";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";

export const metadata = { title: "Projects", description: "Selected MERN stack projects." };

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
          <Typography component="h1" variant="h2" sx={{ fontSize: { xs: 32, md: 44 }, mb: 4 }}>Projects</Typography>
          <ProjectsExplorer />
        </Container>
      </main>
      <Footer />
    </>
  );
}
