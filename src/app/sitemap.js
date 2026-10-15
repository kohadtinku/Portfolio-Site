import { projects } from "@/data/projects";
const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap() {
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    ...projects.map((p) => ({ url: `${base}/projects/${p.slug}`, lastModified: new Date() })),
  ];
}
