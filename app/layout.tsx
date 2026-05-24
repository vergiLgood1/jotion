
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

import { EdgeStoreProvider } from "@/lib/edgestore";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jotion",
  description: "The Connected Workspace Where Better, Faster Work Happens",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/icons/logo-secondary-dark.svg",
        href: "/assets/icons/logo-secondary-dark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/icons/logo-secondary-dark.svg",
        href: "/assets/icons/logo-secondary-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="jotion-theme-2"
            >
            <Toaster position="bottom-center"/>
            <ModalProvider/>
            {children}
          </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
