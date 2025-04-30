import { Providers } from "./providers";
import "@/app/_styles/globals.css";
import { ThemeProvider } from "./components/theme/theme-provider";
import type { Metadata } from "next";
import { Navbar } from "./components/layout/navbar";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "School App",
  description: "WebApp administracción de escuela ",
  icons: {
    icon: "/favicon.ico",
  },
};

/**
 * * Metadatos globales de la aplicación.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */

/**
 * * Tipos de propiedades para el componente RootLayout.
 *
 * @property children - El contenido a renderizar dentro del layout.
 */
type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen bg-background font-sans antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <Providers>{children}</Providers>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
