import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DepSecScore — Security Risk Score for Every npm Package",
  description: "Real-time security risk scores for npm packages based on maintainer activity, vulnerability history, and code analysis. Protect your supply chain."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8ead28bd-ff40-4eb5-879f-a500fb1f9190"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
