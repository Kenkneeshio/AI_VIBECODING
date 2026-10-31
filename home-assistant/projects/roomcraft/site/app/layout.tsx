import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roomcraft — Second Floor Builder",
  description: "Design and publish the second-floor Home Assistant layout.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
