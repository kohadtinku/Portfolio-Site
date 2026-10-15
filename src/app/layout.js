import { GeistSans } from "geist/font/sans";
import ThemeProvider from "@/components/ThemeProvider";
import { profile } from "@/data/profile";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} | ${profile.role}`, template: `%s | ${profile.name}` },
  description: profile.tagline,
  openGraph: { title: `${profile.name} | ${profile.role}`, description: profile.tagline, type: "website", url: siteUrl },
};

export const viewport = { themeColor: "#0a0f1e" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
