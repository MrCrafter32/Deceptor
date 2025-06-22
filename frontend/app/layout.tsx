// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Deceptor Dashboard",
  description: "Monitor honeypot activity",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
        <ThemeProvider>
          <Navbar />
          <div className="pt-4">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
