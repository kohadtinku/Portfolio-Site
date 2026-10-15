import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { projects, getProject } from "@/data/projects";

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }) {
  const p = getProject((await params).slug);
  return p ? { title: p.title, description: p.description, openGraph: { title: p.title, description: p.description } } : {};
}

export default async function ProjectPage({ params }) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  return (<><Navbar /><main><ProjectDetail project={p} /></main><Footer /></>);
}
