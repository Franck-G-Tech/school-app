import { Providers } from "./providers";
import "@/app/styles/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider"
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import "@/styles/globals.css"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
