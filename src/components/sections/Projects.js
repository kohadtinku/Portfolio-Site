"use client";
import { Box, Container } from "@mui/material";
import SectionHeading from "@/components/common/SectionHeading";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";

export default function Projects() {
  return (
    <Box component="section" id="projects" aria-labelledby="projects-title" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading id="projects-title" title="Featured projects" subtitle="Example projects. Completed and in-development work are labelled." />
        <ProjectsExplorer />
      </Container>
    </Box>
  );
}
